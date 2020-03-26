import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// ** Components ** //
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import Contact from "./components/Contact"
import Faq from "./components/Faq"
import Products from "./components/Products"
import ListProducts from "./components/ListProducts"
import ProductDetail from "./components/ProductDetail"
import Register from "./components/Register"

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
					<Route exact path="/user/registro">
            			<Register/>
         			</Route>
        		</Switch>
			</Router>
			
			<Footer/>
		</React.Fragment>
	);
}

export default App;
