import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/products-controllers";
import { check } from "express-validator";


export const router = express.Router()

router.get('/', getProducts)

router.post('/createProd', [
    check('name').not().isEmpty(),
    check('description').isLength({ min: 6 })
], createProduct)

router.delete('/:prodId', deleteProduct)

router.put('/:userId', updateProduct)