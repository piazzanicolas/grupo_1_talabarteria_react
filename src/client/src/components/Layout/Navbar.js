import React from 'react';

function Navbar () {
	return (
        <nav className="navbar navbar-custom navbar-expand-lg navbar-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-toggler" aria-controls="nav-toggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav-toggler">
                    <ul className="navbar-nav w-100 justify-content-around">
                        <li className="nav-item dropdown active"></li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products/">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact/">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/faq/">Preguntas frecuentes</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
	);
}

export default Navbar;