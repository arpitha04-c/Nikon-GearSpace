import axios from 'axios';

const url = 'http://localhost:8080/api/products';

export const getproducts = () => axios.get(url);

export const addProduct = (product) => axios.post(`${url}/add`, product);