import express, { Router } from 'express';
import {
  addProduct,
  getProducts,
  // deleteProduct,
  // getProducts,
  // updateProduct,
} from '../controllers/productController.js';
import { get } from 'node:http';

const productRoutes: Router = express.Router({ mergeParams: true });

productRoutes.post('/', addProduct);

productRoutes.get('/', getProducts);

export default productRoutes;
