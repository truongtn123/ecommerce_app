import Product from "../models/Product.js";
import { promises as fs } from "fs"
import { v2 as cloudinary } from 'cloudinary';
import { BadRequestError } from "../errors/customErrors.js";

export const getAllProducts = async (req, res) => {
    const products = await Product.find({});
    res.status(200).json({ products });
};

export const createProduct = async (req, res) => {
    const newProduct = { ...req.body };
    const { colors } = newProduct;
    const newColors = colors.split(',');
    const newProduct1 = { ...newProduct, colors: newColors }

    if (req.file) {
        const response = await cloudinary.uploader.upload(req.file.path, {
            use_filename: true,
            folder: 'product-ecommerce',
        });
        await fs.unlink(req.file.path);
        newProduct1.image = response.secure_url;
        newProduct1.imagePublicId = response.public_id;
        await Product.create(newProduct1);
        return res.status(200).json({ msg: 'product create successfully' });
    }
    throw new BadRequestError('Please provide an image');
};

export const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.status(200).json({ product });
};

export const updateProduct = async (req, res) => {
    const newProduct = { ...req.body };
    const { colors } = newProduct;
    const newColors = colors.split(',');
    const newProduct1 = { ...newProduct, colors: newColors }

    if (req.file) {
        const response = await cloudinary.uploader.upload(req.file.path, {
            use_filename: true,
            folder: 'product-ecommerce',
        });
        await fs.unlink(req.file.path);
        newProduct1.image = response.secure_url;
        newProduct1.imagePublicId = response.public_id;
    }

    const updateProduct = await Product.findByIdAndUpdate(req.params.id, newProduct1);

    if (req.file && updateProduct.imagePublicId) {
        await cloudinary.uploader.destroy(updateProduct.imagePublicId);
    }

    res.status(200).json({ msg: 'update successfully' });
};

export const deleteProduct = async (req, res) => {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    if (deleteProduct.imagePublicId) {
        await cloudinary.uploader.destroy(deleteProduct.imagePublicId);
    }
    res.status(200).json({ msg: 'Delete product successfully' });
};