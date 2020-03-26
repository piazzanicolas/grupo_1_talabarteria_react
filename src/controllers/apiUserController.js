const db = require('../database/models/');
const Users = db.users;
const Cart = db.productUser;

// Controller Methods
const controller = {
	showAllUsers: (req, res) => {
        Users
            .findAll({
                attributes: ["id","firstName", "lastName","email"],
                raw: true
            })
            .then(users => {
                users.map((oneUser) => {
                    oneUser.detail = `http://localhost:3000/api/users/${oneUser.id}`
                })
                return res.status(200).json({
                    count: users.length,
                    users: users,
                });
            })
            .catch(error => res.send(error))
    },
    
    showOneUser: async (req, res) => {
        let user = await Users.findOne({where: {id: req.params.id}, attributes: ["id","firstName","lastName","email","avatar","isActive"]});

        if(user) {
            let cart = await Cart.findAll({where: {user_id: user.id}, include: ['products']})
            user.avatar = `http://localhost:3000/api/images/${user.avatar}`
			return res.status(302).json({
            user: user,
            purchases: cart
        });
		} else {
            return res.status(404).json({
            msg: "No hay un usuario con ese ID"
            });
        }
    },


    userByEmail: async (req, res) => {
        let user = await Users.findOne({where: {email: req.params.email}, attributes: ["email"]});
        if(user) {
			return res.status(302).json({
            userFound: true,
            msg: "Email registrado",
            data: user
        });
		} else {
            return res.status(404).json({
            userFound: false,
            msg: "Email NO registrado"
            });
        }
    },


    cartView: async (req, res) => {
        let user = await Users.findOne({where: {id: req.params.id}, attributes: ["id","firstName","lastName"]});
        let cart = await Cart.findAll({where: {user_id: req.params.id, ticket: null}, include: ['products']})
        if(cart.length > 0) {
			return res.status(302).json({
            cartEmpty: false,
            msg: "Carrito encontrado",
            user: user,
            data: cart
        });
		} else {
            return res.status(404).json({
            cartEmpty: true,
            msg: "Carrito vacío"
            });
        }
	},
};

module.exports = controller