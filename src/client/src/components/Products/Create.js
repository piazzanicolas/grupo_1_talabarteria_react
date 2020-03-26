import React from 'react';

function Create () {
	return (
        <React.Fragment>
            <br/>
            <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                <h1>Carga de productos</h1>
                </div>
            </div>
            <br/>
            <form action="/products/carga" method="POST" encType="multipart/form-data" id="validateFormCarga"> 
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="name"> Nombre </label>
                            <input type="text" name="name" id="name" className="form-control" data-name="Nombre"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="category_id"> Categoría </label>
                            <select name="category_id" className="form-control" data-name="Categoría">
                                <option defaultValue="">Elige una categoría</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="price"> Precio </label>
                            <input type="number" name="price" id="price" className="form-control" data-name="Precio"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="brand"> Marca </label>
                            <select name="brand_id" className="form-control" data-name="Marca">
                                <option defaultValue="">Elige una marca</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="description"id="description"> Descripción </label>
                            <textarea name="description" className="form-control" data-name="Descripción" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="color"> Color </label>
                            <select name="color" className="form-control" data-name="Color" multiple>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Foto</label>
                            <div className="custom-file">
                            <input type="file" name="image" data-name="Foto" className="custom-file-input"/>
                            <label className="custom-file-label">Elegir archivo...</label>
                            </div>
                        </div>
                    </div>
                </div>
        
                <br/>
                <div className="row">
                    <div className="col-12 col-lg-8 text-right">
                        <button type="submit" className="btn btn-success"> Enviar </button >
                    </div>
                </div>
            </form>
            </div>
            <br/>
        </React.Fragment>
	);
}

export default Create;