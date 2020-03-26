import React, { Component } from 'react';

class Register extends Component {
	// Inicializando el Estado de un Componente
	constructor (props) {
		super(props)
		this.state = {
			userFound: [],
            loading: true,
            purchases: [],
		}
    }
    
    // Ciclo de vida
	componentDidMount () {	
		fetch("http://localhost:3000/api/users/5/?format=json")
			.then(response => response.json())
			.then(data => {
			// Setear el estado
				this.setState({
                    userFound: data.user,
                    purchases: data.purchases,
					loading: false,
					})
			})
			.catch(error => console.log(error));
	}
	
	render () {
        let { userFound, loading, purchases } = this.state;
        return (
            <React.Fragment>
            {
                loading && userFound.length === 0
                ?
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Cargando...</span>
                </div>
                :
                <div className="container" style={{marginTop: 40}}>
                    <div className="row">
                        <div className="col-md-3">
                            <h2>Bienvenid@ {userFound.firstName}</h2>
                            <img src={userFound.avatar} width="100%" alt={userFound.firstName}/>
                            <br/>
                            <br/>
                            <div className="alert alert-success">{userFound.email}</div>
                        </div>
                    </div>
                    <br/>
                        { purchases.length > 0
                        ?
                        <React.Fragment>
                                <h2>Tus compras</h2>
                                <table className="table table-bordered table-striped">  
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>Ticket</th>
                                        </tr>
                                    </thead>
                            
                                    <tbody>
                                        { purchases.map((oneProduct, i) => ( 
                                            <tr key={oneProduct.id}>
                                                <td style={{textAlign: "center"}}>{oneProduct.products.name}</td>
                                                <td style={{textAlign: "center"}}>{oneProduct.price}</td>
                                                <td style={{textAlign: "center"}}>{oneProduct.quantity}</td>
                                                <td style={{textAlign: "center"}}>{oneProduct.ticket}</td>
                                            </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>  
                            </React.Fragment>          
                        :
                            <h2>No has realizado compras todavía</h2>
                        }
                </div>
            }
            </React.Fragment> 
	    )
    }
}

export default Register;