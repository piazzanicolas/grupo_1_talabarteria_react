import React, { Component } from 'react';

class Edit extends Component {
	// Inicializando el Estado de un Componente
	constructor (props) {
		super(props);
		this.state = {
			product: [],
            loading: true,
            brands: [],
            colors: [],
            categories: [],
		}
	}

	// Ciclo de vida
	componentDidMount () {	  
        Promise.all([
            fetch(`http://localhost:3000/api/brands`),
            fetch(`http://localhost:3000/api/colors`),
            fetch(`http://localhost:3000/api/categories`),
            fetch(`http://localhost:3000/api/products/${this.props.match.params.id}/?format=json`)
            ])
            .then((results) => 
                Promise.all(results.map(r => r.json()))
            )
            .then((data) => {
                this.setState({ 
                    brands: data[0].brands,
                    colors: data[1].colors, 
                    categories: data[2].categories,
                    product: data[3].product, 
					loading: false, 
                })
            })
            .catch(error => console.log(error));
	}
	
	// Render de componente
	render() {
        let { product, loading, brands, colors, categories } = this.state;
		return (
            <React.Fragment>
                	{
                    loading && product.length === 0
                    ?
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>
                    :
                    






                    <div className="container">
                        <br/>
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>Editar Producto</h1>
                            </div>
                        </div>
                        <br/>
                
                        <form action="/products/<%= product.id %>/edit?_method=PUT" method="POST" encType="multipart/form-data" id="validateFormEdit"> 
                
                            <div className='row'>
                                <div className="col-md-4">
                                    <div className="form-group">
                                    <label htmlFor='name'> Nombre </label>
                                    <input type='text' name='name' id='name' className="form-control" defaultValue={product.name} data-name="Nombre"/>
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
                                        <label htmlFor='price'> Precio </label>
                                        <input type='number' name='price' id='price' className="form-control" defaultValue={product.price} data-name="Precio"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="brand_id"> Marca </label>
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
                                        <label htmlFor='description' id='description'> Descripción </label>
                                        <textarea name='description' className="form-control" data-name="Descripción" rows="3" defaultValue={product.description}/>
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
                                        <label htmlFor='image'> Imagen</label>
                                        <div className="custom-file">
                                            <input type='file' className="custom-file-input" name='image' data-name="Imagen de Perfil"/>
                                            <label className="custom-file-label">Elegir archivo...</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12 col-lg-8 text-right">
                                    <button type='submit' className='btn btn-success'> Enviar </button >
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

export default Edit;