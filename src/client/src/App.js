import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// ** Components ** //
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import Contact from "./components/Layout/Contact"
import Faq from "./components/Layout/Faq"
import Products from "./components/Products/Products"
import ListProducts from "./components/Products/ListProducts"
import ProductDetail from "./components/Products/ProductDetail"
import Create from "./components/Products/Create"
import Edit from "./components/Products/Edit"
import Register from "./components/Users/Register"
import Profile from "./components/Users/Profile"
import Cart from "./components/Users/Cart"


function App () {
	return (
		<React.Fragment>
			<Header/>
			
			<Router>
        		<Switch>
					<Route exact path="/">
            			<Products/>
          			</Route>
          			<Route exact path="/contact">
            			<Contact/>
          			</Route>
          			<Route exact path="/faq">
            			<Faq/>
         			</Route>
					<Route exact path="/products">
            			<ListProducts/>
         			</Route>
					<Route path="/products/detalle/:id" component={ProductDetail}/>
					<Route exact path="/products/carga">
            			<Create/>
         			</Route>
					<Route path="/products/:id/edit" component={Edit}/>
					<Route exact path="/user/registro">
            			<Register/>
         			</Route>
					 <Route exact path="/user/profile">
            			<Profile/>
         			</Route>
					 <Route exact path="/user/cart">
            			<Cart/>
         			</Route>
        		</Switch>
			</Router>
			
			<Footer/>
		</React.Fragment>
	);
}

export default App;
