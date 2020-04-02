import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';

class Login extends Component {
	// Inicializando el Estado de un Componente
	constructor (props) {
		super(props);
		this.state = {
			emails: [],
		}
	}


// Render de componente
render() {
    return (
        <Container>
            <br/>
            <Row className="justify-content-center">
                <div className="card signin cart-product">
                    <div className="card-body">
                        <form action="http://localhost:3000/api/users/login" method="POST">
                            <div className="col-12 form-group">
                            <label htmlFor="email" className="login-datos">Email</label>
                            <input type="email" className="form-control" name="email"/>
                            </div>
                            <div className="col-12 form-group">
                            <label htmlFor="password"className="login-datos">Clave</label>
                            <input type="password" className="form-control" name="password"/>
                            </div>
                            <div className="col-12 form-group">
                                <label>
                                <input type="checkbox" name="remember"/>
                                Recordarme
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                        </form>
                        <div id="forgot">
                            <a href="/user/login" className="olvido">¿Olvidó su clave?</a>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    )
  }
}

export default Login;