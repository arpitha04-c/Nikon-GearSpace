import React from 'react';

function ProductCard({ product }) {
    let ratings = product.rating;

    return (
        <div>
            <div className="card">

                <img
                    src={product.img}
                    alt={product.name}
                    className="prodimg"
                />

                <h3 className="prodname">
                    {product.name}
                </h3>

                <p className="desc">
                    {product.description}
                </p>

                <div className="rating">
                    {
                        [1, 2, 3, 4, 5].map((count) => (
                            <span
                                key={count}
                                style={{
                                    color: count <= ratings ? "#f39c12" : "#ccc"
                                }}
                            >
                                &#9733;
                            </span>
                        ))
                    }
                </div>

                <div className="price">
                    ₹{product.price}
                </div>

                <div className="stock">
                    Stock: {product.stock}
                </div>

            </div>
        </div>
    );
}

export default ProductCard;