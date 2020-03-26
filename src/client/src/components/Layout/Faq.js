import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

function Faq () {
	return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <br/>
                        <h3>¿Cuáles son las formas de pago?</h3>
                        <p>PAGOS EN FORMA ONLINE O PRESENCIAL</p>
                        <br/>
                        <p>Tarjetas de crédito: </p>

                        <ul>
                            <li>Débito sin recargo sobre el precio publicado</li>
                            <li>1 cuota 3%+ sobre el precio publicado</li>
                            <li>3 cuotas 20%+ sobre el precio publicado</li>
                        </ul>

                        <p>Entidades bancarias: Macro, Galicia, Santander, Credicoop, Supervielle, Frances, HSBC, ICBC, Santa Fe, Municipal, etc</p>

                        <p>Transferencia o depósito bancario (Pesos). En todos estos casos se toma el mismo precio publicado en nuestra web</p>

                        <p>Tarjetas de débito y crédito en 1 pago sin recargo adicional a través de Mercadopago QR</p>


                        <br/>
                        <h3>¿Los productos se encuentran en stock?</h3>
                        <p>Sí, todos los productos publicados se encuentran en existencia en nuestro local (Salvo los que indican «INGRESANDO» que estarían disponibles en la fecha señalada en el producto)</p>


                        <br/>
                        <h3>¿Hacen envíos?</h3>
                        <p>Sí, por medio de Transporte de carga, Bus, Oca, Correo Argentino, o por donde elija o más le convenga al cliente. El costo del envío lo abona el cliente al recibir el producto en caso de que el servicio lo permita. De lo contrario el cliente lo tendrá que abonar previamente.</p>


                        <br/>
                        <h3>¿Son precios Finales o más IVA?</h3>
                        <p>Todos los precios son finales con IVA incluido.</p>


                        <br/>
                        <h3>¿Entregan factura y garantía?</h3>
                        <p>En todas las ventas que realizamos se entrega factura electrónica fiscal. Bajo ningún concepto ni excepción realizamos ventas sin factura.</p>


                        <br/>
                        <h3>¿Cuáles son los horarios de atención?</h3>
                        <p>Los horarios de atención son de lunes a viernes de 8:30 a 17hs, y sábados de 9 a 12:30hs.</p>


                        <br/>
                        <h3>¿Puedo ir a local a retirar mi compra personalmente o enviar a alguien?</h3>
                        <p>Sí, podés retirar tu compra personalmente o enviar a alguien. En caso de que la compra este previamente paga, la persona que retire el o los productos, tendrá que brindar los datos del pedido y su DNI (que es el único documento válido) para retirar.</p>


                        <br/>
                        <h3>¿Como realizo un pedido?</h3>
                        <p>Para armar un pedido simplemente agregar los productos al carro de compras y al finalizar la compra elegís el medio de pago.</p>


                        <br/>
                        <h3>¿Hacen factura A? ¿Cómo la solicito?</h3>
                        <p>Si, por supuesto. En las observaciones del pedido tendrás aclarar que es con factura A y deberás enviar el número de CUIT correspondiente.</p>
                    </Col>
                </Row>
            </Container>
		</React.Fragment>
	);
}

export default Faq;