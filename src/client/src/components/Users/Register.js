import React from 'react';
import { Row, Container } from 'react-bootstrap';

function Register () {
	return (
        <Container>
        <Row>
          <div className="col-12 text-center">
            <h1>Registro de nuevo usuario</h1>
          </div>
        </Row>
        <br/>


        <form action="/user/registro" method="POST" encType="multipart/form-data" className="container" id="validateForm"> 
    
          <Row>
            <h2>Datos inicio de sesión</h2>
          </Row>  
    
          <br/>
    
          <Row>
            <div className="col-md-4">
                <div className='form-group'>
                  <label htmlFor="email"> E-mail </label>
                  <input type="email" name="email" data-name="E-mail" id="email" className="form-control"/>
                </div>
            </div>
            <div className="col-md-4">
              <div className='form-group'>
                <label htmlFor="password"> Contraseña </label>
                <input type="password" name="password" data-name="Contraseña" id="password" className="form-control"/>
              </div>
            </div>
            <div className="col-md-4">
              <div className='form-group'>
                <label htmlFor="re_password"> Repetir Contraseña </label>
                <input type="password" name="re_password" data-name="Repetir Contraseña" id="re_password" className="form-control"/>
              </div>
            </div>
          </Row>
    
          <br/>
          <br/>
    
          <Row>
            <h2>Información personal</h2>
          </Row>  
    
          <br/>
    
            <Row>
              <div className="col-md-6">
                <div className='form-group'>
                  <label htmlFor="nombre"> Nombre </label>
                  <input type="text" name="firstName" data-name="Nombre" id="nombre" className="form-control"/>
                </div>
              </div>
                <div className="col-md-6">
                  <div className='form-group'>
                    <label htmlFor="apellido"> Apellido </label>
                    <input type="text" name="lastName" data-name="Apellido"id="apellido" className="form-control"/>
                  </div>
                </div>
            </Row>
    
            <br/>
          
            <Row>
              <div className="col-md-6">
                <div className='form-group'>
                  <label htmlFor="telefono"> Teléfono </label>
                  <input type="tel" name="phone"data-name="Telefono" id="telefono" className="form-control"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className='form-group'>
                  <label htmlFor="nacimiento"> Fecha de nacimiento </label>
                  <input type="date" name="dob" data-name="Fecha de nacimiento" id="nacimiento" className="form-control"/>
                </div>
              </div>
          </Row>
    
          <br/>
    
            <Row>
              <div className="col-md-4">
                <div className='form-group'>
                  <label htmlFor="calle"> Calle </label>
                  <input type="text" name="street"data-name="Calle" id="calle" className="form-control"/>
                </div>
              </div>
                <div className="col-md-4">
                  <div className='form-group'>
                    <label htmlFor="calleNumero"> Numero </label>
                    <input type="number" name="address_number"data-name="Numero" id="calleNumero" className="form-control"/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className='form-group'>
                    <label htmlFor="piso"> Piso-Departamento </label>
                    <input type="text" name="floor" data-name="Piso-departamento" id="piso" className="form-control"/>
                  </div>
                </div>
            </Row>
            <br/>
            
            <Row>
              <div className="col-md-4">
                <div className='form-group'>
                  <label htmlFor="postal"> Código Postal </label>
                  <input type="text" name="zip_code"data-name="Codigo postal" id="postal" className="form-control "/>
                </div>
              </div>
                <div className="col-md-4">
                  <div className='form-group'>
                    <label htmlFor="provincia"> Provincia </label>
                    <input type="text" name="province"data-name="Provincia" id="provincia" className="form-control "/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
    
                    <label> País </label>
                    <select className="selectpicker form-control" data-name="Pais" name="countryId">
                      <option defaultValue="">Elige un país</option>
                    </select>
                  </div>
                </div>
            </Row>
    
            <br/>
    
            <Row>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Foto de perfil</label>
                  <div className="custom-file">
                    <input type="file" name="avatar" data-name="Imagen de perfil" className="custom-file-input"/>
                    <p className="invalid-feedback"></p>
                    <label className="custom-file-label">Elegir archivo...</label>
                  </div>
                </div>
              </div>
            </Row>
    
          <br/>
              <div className="col-12 col-lg-6 text-right">
                  <button type="submit" className="btn btn-success"> Registrarse </button>
              </div>
        </form>
     
        <br/>
        </Container>
	);
}

export default Register;