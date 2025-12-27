import express, { Router } from 'express';
import { addProduct, getProducts } from '../controllers/productController.js';

const productRoutes: Router = express.Router({ mergeParams: true });

productRoutes.post('/', addProduct);

productRoutes.get('/', getProducts);

export default productRoutes;
