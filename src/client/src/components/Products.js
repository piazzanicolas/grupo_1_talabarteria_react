import React, { Component } from 'react';
import Filters from "./Products/Filters"
import Product from "./Products/Product"
import Carousel from "./Layout/Carousel"
import { Row, Container } from 'react-bootstrap';

class Products extends Component {
	// Inicializando el Estado de un Componente
	constructor (props) {
		super(props);
		this.state = {
			products: [],
			loading: true,
		}
	}

	// Ciclo de vida
	componentDidMount () {	
		fetch('http://localhost:3000/api/products/?format=json')
			.then(response => response.json())
			.then(data => {
				// Setear el estado
				this.setState({
					products: data.products, 
					loading: false,
                })
			})
			.catch(error => console.log(error));
	}
	
	// Render de componente
	render() {
        let { products, loading } = this.state;
		return (
            <React.Fragment>
                <Carousel/>
                <Container>
                    <Row>
                        <Filters/>
                        <React.Fragment>
                            {
                                loading && products.length === 0
                                ?
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Cargando...</span>
                                </div>
                                :
                                <div className="product-container col-sm-12 col-md-6 col-lg-7">
                                    <div className="row">
                                        {
                                            products.map((oneProduct, index) => {
                                                return (
                                                    <Product key={oneProduct.id} product={oneProduct}/>
                                                )
                                            })
                                        }
                                    </div>    
                                </div>
                            }
                        </React.Fragment>
                    </Row>
                </Container>
            </React.Fragment>
		);
	}
}

export default Products;