const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
const db = require('../database/models/');
const Users = db.users;
const Countries = db.countries;
const Cart = db.productUser;
const Products = db.products;


const usersPath = path.join(__dirname, `/../db/dbUsuarios.json`);


// Helper Functions
function getUsuarios () {
	let usersDataFile = fs.readFileSync(usersPath, 'utf-8');
	let arrayUsers = usersDataFile == '' ? [] : JSON.parse(usersDataFile);
	return arrayUsers;
}

function storeUser (dataFromUserToSave) {
	let allUsers = getUsuarios();
	dataFromUserToSave = {
		id: generateUserId(),
		...dataFromUserToSave
	};
	allUsers.push(dataFromUserToSave);
	fs.writeFileSync(usersPath, JSON.stringify(allUsers, null, ' '));
	return dataFromUserToSave;
}

function generateUserId () {
	let allUsers = getUsuarios();
	return allUsers == '' ? 1 : allUsers.pop().id + 1;
}

function getUserByEmail(email){
	let users = getUsuarios();
	let userByEmail = users.find( user => user.email == email );
	return userByEmail;
}

function getUserById(id){
	let users = getUsuarios();
	let userById = users.find( user => user.id == id);
	return userById;
}

// Controller Methods
const controller = {
	registroForm: (req, res) => {
		return res.render('registro');
	},

	saveUser: (req,res) => {

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
			Countries
				.findAll()
				.then(countries => {
					return res.render('registro', {errors: errorsResult.array(), hasErrorGetMessage: hasErrorGetMessage, OldData: req.body, countries});
				})
			
		} else {
			req.body.password = bcrypt.hashSync(req.body.password, 11);
			delete req.body.re_password;
			req.body.avatar = req.file.filename;
			req.body.isActive = 1;
			//let user = storeUser(req.body);
			
			req.session.user = req.body;
			res.locals.user = req.body;
			res.cookie('userCookie', req.body.id, { maxAge: 60000 * 60 });
			
			Users.create(req.body)
				.then(user => {
					return res.redirect('/user/profile');

				})
				.catch(error => res.send(error));

		
		}}
	,
	login: (req, res) => {
		return res.redirect('/');
	},
	processLogin: (req, res) => {
		Users.findOne({
			where: {
				email: req.body.email
			}
		})
		.then( (user) => {
		if (user != undefined) {
			if (bcrypt.compareSync(req.body.password, user.password)){
				
				req.session.user = user;
				res.locals.user = user;
				if (req.body.remember_user){
					res.cookie('userCookie', user.id, { maxAge: 60000 * 60 });
				}
				return res.redirect('/user/profile');
			} else {
				res.send('Alguno de los datos es incorrecto.');
			}

		} else {
			res.send('Alguno de los datos es incorrecto.')
		}
	})
	.catch( error => res.send(error))
	}
	,
	profile: (req, res) => {
		//let userLogged = getUserById(req.session.user.id);
		res.locals.user = req.session.user;
		Cart
			.findAll({
				where: {user_id: req.session.user.id},
				include: ['products', 'users']
				})
			.then(result => 
				res.render('profile', {result, userLogged: res.locals.user }))
			.catch(error => res.send(error))
	},

	logout: (req, res) => {
		req.session.destroy();
		res.locals.user = undefined;
		res.cookie('userCookie',null,{ maxAge: -1 });
		return res.redirect('/');
	},

	cartView: (req, res) => {
		Cart
			.findAll({
				where: {
					user_id: res.locals.user.id,
					ticket: null
				},
				include: ['users', 'products']
			}) 
			.then(carrito => res.render('cart', {carrito}))
			.catch(error => res.send(error));
	},

	saveProduct: (req, res) => {
		Products
			.findByPk(req.params.id)
			.then(product => {
				Cart
					.create({
						product_id: req.params.id,
						user_id: req.session.user.id,
						price: product.price,
						purchaseDate: new Date(),
						quantity: req.body.quantity
					})
					.then(carrito => res.redirect('/'))
					.catch(error => res.send(error));
			})
			.catch(error => res.send(error))
	},

	deleteProduct: (req, res) => {
		Cart
			.destroy({
				where: {id: req.params.id}	
			})
			.then(carrito => res.redirect('/user/cart'))
			.catch(error => res.send(error));
	},

	purchase: (req, res) => {
		let fechaCompra= new Date()
		Cart
			.findAll({
				where: {
					user_id: res.locals.user.id,
					ticket: null
				},
			}) 
			.then(carrito => {
				carrito.forEach (oneProduct =>{
					oneProduct
						.update({
							ticket: res.locals.user.id.toString() + fechaCompra.getFullYear().toString() + fechaCompra.getMonth().toString() + fechaCompra.getDate().toString() + fechaCompra.getHours().toString() + fechaCompra.getMinutes().toString() + fechaCompra.getSeconds().toString()
						})
						.then(compra => res.redirect('/'))
						.catch(error => res.send(error))
				})
			})
			.catch(error => res.send(error))
	}
};

module.exports = controller