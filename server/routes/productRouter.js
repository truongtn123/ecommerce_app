import { Router } from "express";
const router = Router();

import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/productController.js";
import { validateParam, validateProductInput } from "../middleware/validateMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
import { authorizePermisstions } from "../middleware/authMiddleware.js";


router.route('/')
.get(getAllProducts)
.post(upload.single('image'), validateProductInput,[authorizePermisstions('admin'),createProduct]);

router.route('/:id')
.get(validateParam, getProduct)
.patch( upload.single('image'),validateProductInput, validateParam, [authorizePermisstions('admin'),updateProduct])
.delete(validateParam, [authorizePermisstions('admin'),deleteProduct]);


export default router;