import React from 'react'

export default function ( { pageContext } ) {
    const { products } = pageContext

    return <div>
        <h1 className="title">Products</h1>
        <div className="columns">
        {products &&
            products.map(
                (product, index) => 
                <div className="column is-one-third" key={index}>
                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    {product.image &&
                                        <img src={product.image[0].fields.file.url} alt="Product" />
                                    }
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{product.productName}</p>
                                <p className="subtitle is-6">{product.productDescription}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
         </div>
    </div>
}