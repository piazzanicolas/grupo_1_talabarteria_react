const path = require('path');
const db = require('../database/models');
const Categories = db.categories;
const Brands = db.brands;
const Colors = db.colors;
const Products = db.products;
const Op = db.Sequelize.Op;

function filterBrand(req) {
	if (req.query.lamartina && req.query.mustad) {
		return [1,2]
	} else if (req.query.lamartina) {
		return [1]
	} else if (req.query.mustad) {
		return [2]
	} else {
		return [1,2]
	}
}

function filterPrice(req) {
	if (req.query.rango1 && req.query.rango2) {
		return {[Op.gt]: 0, [Op.lt]: 5000 }
	} else if (req.query.rango1) {
		return {[Op.gt]: 0, [Op.lte]: 1000 }
	} else if (req.query.rango2) {
		return {[Op.gt]: 1000, [Op.lt]: 5000 }
	} else {
		return {[Op.gt]: 0 }
	}
}

function filterCategory(req) {
	if (req.query.marroquineria && req.query.talabarteria) {
		return [1,2]
	} else if (req.query.marroquineria) {
		return [1]
	} else if (req.query.talabarteria) {
		return [2]
	} else {
		return [1,2]
	}
}




// Controller Methods
const controller = {
    showCategories: (req, res) => {
        Categories
            .findAll()
            .then(categories => {
                return res.status(200).json({
                    total_results: categories.length,
                    categories: categories
                });
            })
            .catch(error => res.send(error))
    },


    showBrands: (req, res) => {
        Brands
            .findAll()
            .then(brands => {
                return res.status(200).json({
                    total_results: brands.length,
                    brands: brands
                });
            })
            .catch(error => res.send(error))
    },


    showColors: (req, res) => {
        Colors
            .findAll()
            .then(colors => {
                return res.status(200).json({
                    total_results: colors.length,
                    colors: colors
                });
            })
            .catch(error => res.send(error))
    },


    showImage: (req, res) => {
        let route = path.join(__dirname, '../../public/images', `/${req.params.name}`);
        return res.sendFile(route)
    },


    search: (req, res) => {
		if (req.query.search || req.query.mustad || req.query.lamartina || req.query.rango1 || req.query.rango2 || req.query.marroquineria || req.query.talabarteria) { //el req.query no funciona en todos los casos
			Products
				.findAll({
					where: {
						name: {[Op.like]: `%${req.query.search}%`},
						brand_id: {[Op.or]: filterBrand(req)},
						price: filterPrice(req),
						category_id: {[Op.or]: filterCategory(req)}
					}
				})
				.then(products => {
					products.map((oneProduct) => {
						oneProduct.image = `http://localhost:3000/api/images/${oneProduct.image}`
					})
					return res.status(200).json({
						products: products
					})
				})
				.catch(error => res.send(error));
		} else {
			Products
				.findAll()
				.then (products => {
					products.map((oneProduct) => {
						oneProduct.image = `http://localhost:3000/api/images/${oneProduct.image}`
					})
					return res.status(200).json({
						products: products
					})
				})
				.catch(error => res.send(error));
		};
	},
};

module.exports = controller