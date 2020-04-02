import React from 'react';
import Product from "./Product"

function ProductsIndex ({products, loading}) {
	return (
        <React.Fragment>
        {
            loading && products.length === 0
            ?
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Cargando...</span>
            </div>
            :
            <div className="product-container col-sm-12 col-md-6 col-lg-7">
                <div className="row">
                    {
                        products.map((oneProduct, index) => {
                            return (
                                <Product key={oneProduct.id} product={oneProduct}/>
                            )
                        })
                    }
                </div>    
            </div>
        }
        </React.Fragment>
	);
}

export default ProductsIndex;