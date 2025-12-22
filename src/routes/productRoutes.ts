import express from 'express';
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../controllers/productController.js';


const productRoutes = express.Router({ mergeParams: true });

productRoutes.post(
  "/", addProduct
);
