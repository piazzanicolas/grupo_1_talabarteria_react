import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenSquare } from '@fortawesome/free-solid-svg-icons'

class ListProducts extends Component {
	// Inicializando el Estado de un Componente
	constructor (props) {
		super(props)
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
	
	render () {
		let { products, loading } = this.state
		console.log(products)
		return (
			<div className="card border-primary mb-3">
				<div className="card-body text-primary">
					<h5 className="card-title">Listado de Productos</h5>
					<div className="my-2 text-left">
						<a className="btn btn-rounded btn-primary" role="button" href="/products/carga/">Crear Producto</a>
					</div>
					{
                        loading && products.length === 0
                        ?
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Cargando...</span>
                        </div>
                        :
						<table className="table table-bordered table-striped">  
							<thead>
							<tr>
								<th>ID</th>
								<th>Imagen</th>
								<th>Nombre</th>
								<th>Descripción</th>
								<th>Precio</th>
								<th>Categoría</th>
								<th>Color</th>
								<th>Marca</th>
								<th>Acción</th>
							</tr>
							</thead>
					
							<tbody>
								{
									products.map((oneProduct, index) => {
										return (
											<tr key={index}>
												<td>{oneProduct.id}</td>
												<td>
												<a href={`/products/detalle/${oneProduct.id}`}>
													<img src={oneProduct.image} alt={`${oneProduct.name}`} width="100"/>
												</a>
												</td>
												<td>{oneProduct.name}</td>
												<td>{oneProduct.description}</td>
												<td>${oneProduct.price}</td>
												<td>{oneProduct.category.name}</td>
												<td>
													{ oneProduct.colors.map( oneColor => (
													<p key={oneColor.id}>
													{oneColor.name}
													</p>
													))}
												</td>
												<td>{oneProduct.brand.name}</td>
												<td style={{textAlign: "center"}}>
													<form action={`/products/${oneProduct.id}/edit`}>
														<button className="btn btn-block edit-button">
															<FontAwesomeIcon icon={faPenSquare} />
														</button>  
													</form> 
													<form action={`http://localhost:3000/api/products/${oneProduct.id}/delete?_method=DELETE`} method="POST">
														<button className="btn btn-block delete-button" type="submit" >
															<FontAwesomeIcon icon={faTrash} />
														</button>
													</form>
												</td>
											</tr>
										)
									})
								}
							</tbody>
						</table>
					}
				</div>
			</div>
		)
	}
}

export default ListProducts;