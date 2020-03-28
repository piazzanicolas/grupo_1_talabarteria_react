const path = require('path');
const db = require('../database/models');
const Categories = db.categories;
const Brands = db.brands;
const Colors = db.colors;

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
    }
};

module.exports = controller