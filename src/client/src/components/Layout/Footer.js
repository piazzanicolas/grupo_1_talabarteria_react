import React from 'react';

function Footer () {
	return (
        <React.Fragment>
            <footer>
                <div className="container">
                    <div className="row">
                        <p className="col-12 text-center">
                            Copyright © 2019 Talabartería El Palenque. Todos los Derechos Reservados.
                        </p>
                        <p className="col-12 text-center">
                            El uso de este sitio web implica la aceptación de los Términos y Condiciones y de las Políticas de Privacidad de Talabartería El Palenque. Las fotos son a modo ilustrativo. La venta de cualquiera de los productos publicados está sujeta a la verificación de stock. Los precios online para los productos presentados/publicados en <a href="http://localhost:3000/api/products/">www.elpalenque.com.ar</a> son válidos exclusivamente para la compra vía internet en la página antes mencionada.
                        </p>
                    </div>
                </div>
            </footer>
		</React.Fragment>
	);
}

export default Footer;