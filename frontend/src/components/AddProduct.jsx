import React, { useState } from 'react';
import { addProduct } from '../api';

function AddProduct() {

    const [product, setProduct] = useState({
        name: '',
        description: '',
        img: '',
        rating: 0,
        stock: 0,
        price: 0
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addProduct(product)
            .then((response) => {
                console.log("Product added:", response.data);
                alert("Product added successfully!");
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to add product");
            });
    };

    return (
        <div className="add-product">

            <h2>Add Product</h2>

            <form className="product-form" onSubmit={handleSubmit}>

                <input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="Product name"
                    value={product.name}
                    onChange={handleChange}
                />

                <input
                    className="form-input"
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={product.description}
                    onChange={handleChange}
                />

                <input
                    className="form-input"
                    type="text"
                    name="img"
                    placeholder="Image URL"
                    value={product.img}
                    onChange={handleChange}
                />

                <input
                    className="form-input"
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    value={product.rating}
                    onChange={handleChange}
                />

                <input
                    className="form-input"
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    value={product.stock}
                    onChange={handleChange}
                />

                <input
                    className="form-input"
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={product.price}
                    onChange={handleChange}
                />

                <button className="add-btn" type="submit">
                    Add Product
                </button>

            </form>

        </div>
    );
}

export default AddProduct;