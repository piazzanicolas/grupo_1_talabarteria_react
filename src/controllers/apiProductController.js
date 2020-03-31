const db = require('../database/models');
const Products = db.products;
const {validationResult} = require('express-validator');

// Controller Methods
const controller = {
    showAllProducts: (req, res) => {
        Products
            .findAll({
                attributes: ["id", "name", "description", "price", "image"],
                include: ["brand", "category", "colors"],
              //  raw: true,
              //  nest: true
            })
            .then(products => {
                // Inicializar contandores de marcas y categorias //
                //let countBrand1=0;
                //let countBrand2=0;
                //let countCategory1=0;
                //let countCategory2=0;

                products.map((oneProduct) => {
                    oneProduct.detail = `http://localhost:3000/api/products/${oneProduct.id}`
                    
                    // Cuento cada marca y categoria //
                  //  if (oneProduct.brand.id == 1) {
                  //      countBrand1++;
                  //  } else if (oneProduct.brand.id == 2) {
                  //      countBrand2++;
                  //  } else {
                  //      null
                  //  }

                  //  if (oneProduct.category.id == 1) {
                  //      countCategory1++;
                  //  } else if (oneProduct.category.id == 2) {
                  //      countCategory2++;
                  //  } else {
                  //      null
                  //  }
                  //  oneProduct.colors = [oneProduct.colors]
                    oneProduct.image = `http://localhost:3000/api/images/${oneProduct.image}`
                })

                return res.status(200).json({
                    total_results: products.length,
                    //countByCategory: {Marroquineria: countCategory1 , Talabarteria: countCategory2},
                    //countByBrand: {LaMartina: countBrand1, Mustad: countBrand2},
                    products: products
                });
            })
            .catch(error => res.send(error))
    },
    
    
    showOneProduct: async (req, res) => {
        let product = await Products.findOne({where: {id: req.params.id}, include: ["brand", "category", "colors"], attributes: ["id","name", "description", "price", "image"]});
        if(product) {
            product.image = `http://localhost:3000/api/images/${product.image}`
            product.colors = [product.colors]
			return res.status(302).json({
            product: product
        });
		} else {
            return res.status(404).json({
            msg: "No hay un producto con ese ID"
            });
        }
    },


    guardar: (req, res, next) => {
		const hasErrorGetMessage = (field, errorsView) => {
			for (const oneError of errorsView) {
				if (oneError.param == field) {
					return oneError.msg;
				}
			}
			return false;
		}

		let errorsResult = validationResult(req);
		if (!errorsResult.isEmpty()){
			// Vuelvo a hacer la consulta a la base de datos para generar la vista
			Categories
			.findAll()
			.then(categories => {
				Brands
					.findAll()
					.then(brands => {
						Colors
							.findAll()
							.then(colors => {
								return res.redirect("http://localhost:3001/products");
							})
							.catch(error => res.send(error));	
					})
					.catch(error => res.send(error));			
		})
			.catch(error => res.send(error));
			
		} else {
			Products
				.create({
					...req.body,
					image: req.file.filename
				})
				.then (product => {
					product.addColors(req.body.color);
					return res.redirect("http://localhost:3001/products");
				})
				.catch(error => res.send(error));
			}
    },
    

    editarCambios: (req, res) => {	
		const hasErrorGetMessage = (field, errorsView) => {
			for (const oneError of errorsView) {
				if (oneError.param == field) {
					return oneError.msg;
				}
			}
			return false;
		}

		let errorsResult = validationResult(req);
		if (!errorsResult.isEmpty()){
			// Vuelvo a hacer la consulta a la base de datos para generar la vista
			Products
			.findByPk(req.params.id)
			.then (product => {
				Categories
					.findAll()
					.then (categories => {
						Brands
							.findAll()
							.then (brands => {
								Colors
									.findAll()
									.then (colors => res.render('editar-producto', {product, categories, brands, colors, errors: errorsResult.array(), hasErrorGetMessage: hasErrorGetMessage}) )
									.catch(error => res.send(error));
							})
							.catch(error => res.send(error));
					})
					.catch(error => res.send(error));
				})
			.catch(error => res.send(error));
		} else {
			Products
				.findByPk(req.params.id,{
					include: ['colors']
				})
				.then(theProduct => {
					theProduct
						.update({
							...req.body,
							description: req.body.description.trim(), 
							image: req.file ? req.file.filename : theProduct.image
							})
						.then(async product => {
							await product.removeColors(product.colors);
							await product.addColors(req.body.color);
							return res.redirect("http://localhost:3001/products")})
						.catch(error => res.send(error));
				})
				.catch(error => res.send(error));
		}
    },
    

    borrar: (req, res) => {
		Products
			.findByPk(req.params.id, {
				include: ['colors']
			})
			.then (async product => {
				await product.removeColors(product.colors);
				await product.destroy();
				return res.redirect("http://localhost:3001/products");
		})
			.catch(error => res.send(error));
	}
};

module.exports = controller