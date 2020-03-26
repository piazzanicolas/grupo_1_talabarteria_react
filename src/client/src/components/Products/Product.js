import React from 'react';
import { Link } from 'react-router-dom';

function Product({product}){

    const {id, name, description, price, image} = product;

    return(
        <div className="card product">
            <Link to={`/products/detalle/${id}`}>
                <img src={image} className="card-img-top" alt={name}/> 
            </Link>

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">$ {price} / Unidad</p>
                <button type="button" className="btn btn-primary btn-cart" >
                    Añadir al carrito
                </button>
            </div>
        </div>
    )
}

export default Product;