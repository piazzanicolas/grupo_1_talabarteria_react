import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class Cart extends Component {
	// Inicializando el Estado de un Componente
	constructor (props) {
		super(props)
		this.state = {
			cartEmpty: true,
            loading: true,
            purchases: [],
		}
    }
    
    // Ciclo de vida
	componentDidMount () {	
		fetch("http://localhost:3000/api/users/cart/4/?format=json")
			.then(response => response.json())
			.then(data => {
			// Setear el estado
				this.setState({
                    user: data.user,
                    cartEmpty: data.cartEmpty,
                    purchases: data.data,
					loading: false,
					})
			})
			.catch(error => console.log(error));
	}
	
	render () {
        let { cartEmpty, loading, purchases, user } = this.state;
        let priceFinal = 0;
        purchases.map (oneProduct => (
            priceFinal = priceFinal + (oneProduct.quantity * oneProduct.price)
        ))

        return (
            <React.Fragment>
            {
                loading && purchases.length === 0
                ?
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Cargando...</span>
                </div>
                :
                    <div className="container">
                        {
                        cartEmpty === false
                        ?
                            <React.Fragment>
                                <h1>Carrito de {user.firstName} {user.lastName}</h1>
                                    <div className="row border-bottom py-2">
                                        <div className="col-1">
                                            <p>Imagen</p>
                                        </div>
                                        <div className="col-3">
                                            <p>Nombre</p>
                                        </div>
                                        <div className="col-3">
                                            <p>Cantidad</p>
                                        </div>
                                        <div className="col-3">
                                            <p>Precio</p>
                                        </div>
                                        <div className="col-2">
                                            <p>Acciones</p>
                                        </div>
                                    </div>
                                    
                                    { purchases.map ((oneProduct, i) => (
                                        <div className={`row border-bottom py-2 ${i % 2 === 0 ? "bg-light" : null}`} key={i}>
                                            <div className='col-1'>
                                                <img src={`http://localhost:3000/api/images/${oneProduct.products.image}/?format=json`} alt={oneProduct.products.name} width="100%"/>
                                            </div>
                                            <div className="col-3">
                                                {oneProduct.products.name}
                                            </div>
                                            <div className="col-3">
                                                <input type="number" className="form-control" defaultValue={oneProduct.quantity}/>
                                            </div>
                                            <div className="col-3">
                                                ${oneProduct.price}
                                            </div>                
                                            <div className="col-2">
                                                <form action="/user/deleteProduct/<%= oneProduct.id %>?_method=DELETE" method="POST">
                                                    <button className="btn btn-block delete-button" type="submit">
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </form>
                                            </div>
                                        </div> 
                                    ))}
                                
                                    <div className="row border-bottom py-2">
                                        <div className="col-3 offset-7">
                                            Total: ${priceFinal}
                                        </div>
                                    </div>

                                    <div className="row pt-2">
                                        <div className="col-2 offset-10">
                                            <form className="/user/purchase" method="POST">
                                                <button className="btn btn-primary btn-cart" type="submit">
                                                    Finalizar compra
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                            </React.Fragment>
                        :
                            <React.Fragment>
                                <br/>
                                <h3 style={{textAlign: "center"}}>No has agregado productos en tu carrito todavía</h3>
                                <br/>
                            </React.Fragment>
                        }
                    </div>
            }
            </React.Fragment> 
	    )
    }
}

export default Cart;