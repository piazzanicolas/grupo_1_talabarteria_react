import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

function Contact () {
	return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <br/>

                        <h2 className="text-contacto">Ubicación del local</h2>
                        <p className="text-contacto">Talabartería El Palenque</p>
                        <p className="text-contacto">Av. Gaona 1323 (1742), Paso del Rey</p>
                        <p className="text-contacto">Prov. de Buenos Aires, Argentina</p>

                        <br/>
                        <br/>

                        <h2 className="text-contacto">Teléfono</h2>
                        <p className="text-contacto">(+54) 11-5365-8849</p>

                        <br/>
                        <br/>

                        <h2 className="text-contacto">E-mail</h2>
                        <p className="text-contacto">info@elpalenque.com.ar</p>

                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <iframe title="jsx-a11y/iframe-has-title" className="col-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13132.322097277392!2d-58.74628664340972!3d-34.62740533123311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc95881c9b6e5b%3A0xe21b1239eba64802!2sTalabarter%C3%ADa%20La%20Querencia!5e0!3m2!1ses!2sar!4v1583677096159!5m2!1ses!2sar" width="600" height="450" frameBorder="0" style={{border:0, marginTop: "30px"}} allowFullScreen=""></iframe>
                    </Col>
                </Row>
            </Container>
		</React.Fragment>
	);
}

export default Contact;