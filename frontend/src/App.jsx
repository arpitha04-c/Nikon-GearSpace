import { useEffect, useState } from 'react';
import { getproducts } from './api';
import './App.css';
import ProductCard from './components/ProductCard';
import AddProduct from './components/AddProduct';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    getproducts()
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div>

      <h1 className="main-title">Nikon GearSpace</h1>

      <p className="subtitle">
        Photography Equipment Management System
      </p>

      <AddProduct />

      <div className="container">
        {
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        }
      </div>

    </div>
  );
}

export default App;