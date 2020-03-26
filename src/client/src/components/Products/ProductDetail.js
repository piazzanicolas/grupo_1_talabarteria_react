import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';

class ProductDetail extends Component {
	// Inicializando el Estado de un Componente
	constructor (props) {
		super(props)
		this.state = {
			productFound: [],
			loading: true,
			url:null,
		}
	}

	// Ciclo de vida
	componentDidMount () {	
		fetch(`http://localhost:3000/api/products/${this.props.match.params.id}/?format=json`)
			.then(response => response.json())
			.then(data => {
			// Setear el estado
				this.setState({
					productFound: data.product, 
					loading: false,
					})
			})
			.catch(error => console.log(error));
	}
	
	render () {
		let { productFound, loading } = this.state;
		return (
			<React.Fragment>
				{
                    loading && productFound.length === 0
                    ?
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>
                    :
					<Container>
						<Row>
							<Col sm={12} md={6} lg={4} >
								<img src={productFound.image} alt={productFound.name} width="100%" />
							</Col>
							<Col sm={12} md={6} lg={6}>
								<h1>{productFound.name}</h1> <br />
								<h5>Cód: {productFound.id}</h5><br />  
								<h5>{productFound.description}</h5> <br />
								<h5>Marca: {productFound.brand.name}</h5> <br />
								<h5>Categoría: {productFound.category.name}</h5> <br />
								<h5>Colores:</h5>
								<ul>
									{ productFound.colors.map( item => (
										<li key={item.id}>
											{item.name}
										</li>
									))}			
								</ul>
								<br />
								<h1>$ {productFound.price}</h1> <br />
								<figure className="medios-de-pago">
									<img src="/assets/images/medios-de-pago.png" alt="Medios de Pago" width="300" height="auto" />
								</figure>
								<button className="btn btn-primary">Comprar</button>
							</Col>
						</Row>
					</Container>
                }
			</React.Fragment>
		)
	}
}

export default ProductDetail;