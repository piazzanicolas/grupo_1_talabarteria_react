import React, { Component } from 'react';

class Create extends Component {
    // Inicializando el Estado de un Componente
	constructor (props) {
		super(props);
		this.state = {
			brands: [],
            colors: [],
            categories: [],
            loading: true
		}
    }


    // Ciclo de vida
	componentDidMount () {
        Promise.all([
            fetch(`http://localhost:3000/api/brands`),
            fetch(`http://localhost:3000/api/colors`),
            fetch(`http://localhost:3000/api/categories`),
          ])
            .then((results) => 
              Promise.all(results.map(r => r.json()))
            )
            .then((data) => {
                this.setState({ 
                  brands: data[0].brands,
                  colors: data[1].colors, 
                  categories: data[2].categories,
                  loading: false 
                })
            })
            .catch(error => console.log(error));
	}
    
    render() {
        let { brands, colors, categories, loading } = this.state;
        return (
            <React.Fragment>
                {
                loading && colors.length === 0
                ?
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Cargando...</span>
                </div>
                :
                <div className="container">
                    <br/>
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
                                        {categories.map((oneCategory, i) => {
                                            return (
                                            <option value={oneCategory.id} key={i}>
                                                {oneCategory.name}
                                            </option> )
                                        }) 
                                        }
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
                                        {brands.map((oneBrand, i) => {
                                            return (
                                            <option value={oneBrand.id} key={i}>
                                                {oneBrand.name}
                                            </option> )
                                        }) 
                                        }
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
                                    {colors.map((oneColor, i) => {
                                            return (
                                            <option value={oneColor.id} key={i}>
                                                {oneColor.name}
                                            </option> )
                                        }) 
                                        }
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
                    <br/>
                </div>
            }
            </React.Fragment>
	    );
    }
}

export default Create;