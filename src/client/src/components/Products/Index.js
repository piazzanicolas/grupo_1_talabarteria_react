import React, { Component } from 'react';
import ProductsIndex from "./ProductsIndex"

import Carousel from "../Layout/Carousel"
import { Row, Container } from 'react-bootstrap';

class Index extends Component {
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
    
    
    searchIndex (e) {
        e.preventDefault();
        this.setState({
            loading: true
        })

        let query = 'search=' + e.currentTarget.parentElement.search.value;

        if(e.currentTarget.parentElement.talabarteria.checked === true) {
            query += "&talabarteria=on"
        }

        if(e.currentTarget.parentElement.marroquineria.checked === true) {
            query += "&marroquineria=on"
        }

        if(e.currentTarget.parentElement.rango1.checked === true) {
            query += "&rango1=on"
        }

        if(e.currentTarget.parentElement.rango2.checked === true) {
            query += "&rango2=on"
        }

        if(e.currentTarget.parentElement.lamartina.checked === true) {
            query += "&lamartina=on"
        }

        if(e.currentTarget.parentElement.mustad.checked === true) {
            query += "&mustad=on"
        }

        fetch('http://localhost:3000/api/search/?' + query)
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
                        <React.Fragment>
                            <div className="filtros-container col-sm-12 col-md-3 col-lg-3">
                                <form method="GET">
                                    <div className="form-group">
                                        <label>Buscar por nombre:</label>
                                        <input type="text" name="search" placeholder="Ando buscando..." />
                                    </div>
                                    <div className="titulo-filtros">
                                        <p>Filtrar por:</p>
                                    </div>
                                    <div className="filtro">
                                        <p>Categoría</p>
                                        <div className="caja-filtro form-group">
                                            <input type="checkbox" id="marroquineria" name="marroquineria"/>
                                            <label htmlFor="marroquineria">Marroquinería</label><br/>
                                            <input type="checkbox" id="talabarteria" name="talabarteria" />
                                            <label htmlFor="talabarteria">Talabartería</label><br/>
                                        </div>
                                    </div>
                                    <div className="filtro">
                                        <p>Precio</p>
                                        <div className="caja-filtro form-group">
                                            <input type="checkbox" id="rango1" name="rango1" />
                                            <label htmlFor="rango1">$0-$1.000</label><br/>
                                            <input type="checkbox" id="rango2" name="rango2" />
                                            <label htmlFor="rango2">$1.000-$5.000</label><br/>
                                        </div>
                                    </div>
                                    <div className="filtro">
                                        <p>Marca</p>
                                        <div className="caja-filtro form-group">
                                            <input type="checkbox" id="mustad" name="mustad"/>
                                            <label htmlFor="mustad">Mustad</label><br/>
                                            <input type="checkbox" id="lamartina" name="lamartina"/>
                                            <label htmlFor="lamartina">La Martina</label><br/>
                                        </div>
                                    </div>
                                    <button onClick = { (e)=>{this.searchIndex(e)} }>BUSCAR</button>
                                </form>
                            </div>
                        </React.Fragment>
                        <ProductsIndex products={products} loading={loading}/>
                    </Row>
                </Container>
            </React.Fragment>
		);
	}
}

export default Index;