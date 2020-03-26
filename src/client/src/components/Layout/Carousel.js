import React from 'react';

function Carousel () {
	return (
            <div id="carousel-promociones" className="carousel slide" data-ride="carousel" data-pause="hover">
                <div className="carousel-inner list-promociones">
                    <div className="carousel-item active">
                        <h2>ESTA ES LA PROMO #1</h2>
                        <em>oferta del mes</em>
                    </div>
                    <div className="carousel-item">
                        <h2>ESTA ES LA PROMO #2</h2>
                        <em>oferta del mes</em>
                    </div>
                    <div className="carousel-item">
                        <h2>ESTA ES LA PROMO #3</h2>
                        <em>oferta del mes</em>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carousel-promociones" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-promociones" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
	);
}

export default Carousel;