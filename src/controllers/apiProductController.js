const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const Products = db.products;

// Controller Methods
const controller = {
    showAllProducts: (req, res) => {
        Products
            .findAll({
                attributes: ["id", "name", "description", "price", "image"],
                include: ["brand", "category", "colors"],
                raw: true,
                nest: true
            })
            .then(products => {
                // Inicializar contandores de marcas y categorias //
                let countBrand1=0;
                let countBrand2=0;
                let countCategory1=0;
                let countCategory2=0;

                products.map((oneProduct) => {
                    oneProduct.detail = `http://localhost:3000/api/products/${oneProduct.id}`
                    
                    // Cuento cada marca y categoria //
                    if (oneProduct.brand.id == 1) {
                        countBrand1++;
                    } else if (oneProduct.brand.id == 2) {
                        countBrand2++;
                    } else {
                        null
                    }

                    if (oneProduct.category.id == 1) {
                        countCategory1++;
                    } else if (oneProduct.category.id == 2) {
                        countCategory2++;
                    } else {
                        null
                    }
                    oneProduct.colors = [oneProduct.colors]
                    oneProduct.image = `http://localhost:3000/api/images/${oneProduct.image}`
                })

                return res.status(200).json({
                    total_results: products.length,
                    countByCategory: {Marroquineria: countCategory1 , Talabarteria: countCategory2},
                    countByBrand: {LaMartina: countBrand1, Mustad: countBrand2},
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


    showImage: (req, res) => {
        let route = path.join(__dirname, '../../public/images', `/${req.params.name}`);
        return res.sendFile(route)
    }
};

module.exports = controller