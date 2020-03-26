import React from 'react';

function Filters () {
	return (
        <React.Fragment>
            <div className="filtros-container col-sm-12 col-md-3 col-lg-3">
                <form action="/" method="GET">
                    <div className="form-group">
                        <label>Buscar por nombre:</label>
                        <input type="text" name="search" placeholder="Ando buscando..." />
                    </div>
                    <div className="titulo-filtros">
                        <p>Filtrar por:</p>
                    </div>
                    <div className="filtro">
                        <p>Categoría</p>
                        <div className="caja-filtro form-group">
                            <input type="checkbox" id="marroquineria" name="marroquineria" />
                            <label htmlFor="marroquineria">Marroquinería</label><br/>
                            <input type="checkbox" id="talabarteria" name="talabarteria" />
                            <label htmlFor="talabarteria">Talabartería</label><br/>
                        </div>
                    </div>
                    <div className="filtro">
                        <p>Precio</p>
                        <div className="caja-filtro form-group">
                            <input type="checkbox" id="rango1" name="rango1" />
                            <label htmlFor="rango1">$0-$1.000</label><br/>
                            <input type="checkbox" id="rango2" name="rango2" />
                            <label htmlFor="rango2">$1.000-$5.000</label><br/>
                        </div>
                    </div>
                    <div className="filtro">
                        <p>Marca</p>
                        <div className="caja-filtro form-group">
                            <input type="checkbox" id="mustad" name="mustad"/>
                            <label htmlFor="mustad">Mustad</label><br/>
                            <input type="checkbox" id="lamartina" name="lamartina"/>
                            <label htmlFor="lamartina">La Martina</label><br/>
                        </div>
                    </div>
                    <button type="submit">BUSCAR</button>
                </form>
            </div>
		</React.Fragment>
	);
}

export default Filters;