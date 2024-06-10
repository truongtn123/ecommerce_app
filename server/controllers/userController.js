import User from "../models/User.js";
import {promises as fs} from "fs"
import {v2 as cloudinary} from 'cloudinary';
import Order from "../models/Order.js";
import Product from "../models/Product.js";

export const getCurrentUser = async (req, res) => {
    const user = await User.findOne({_id: req.user.userId});
    const userWithoutPassword = user.toJSON();
    res.status(200).json({user: userWithoutPassword});
};

export const getApplicationStats = async (req, res) => {
    const users = await User.countDocuments();
    const orders = await Order.countDocuments();
    const products = await Product.countDocuments();
    res.status(200).json({users, orders, products});
};

export const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.status(200).json({users});
};


export const updateUser = async (req, res) => {
    const newUser = {...req.body};
    delete newUser.password;
    if (req.file) {
        const response = await cloudinary.uploader.upload(req.file.path, {
            use_filename: true,
            folder: 'avt-user-ecommerce',
        });
        await fs.unlink(req.file.path);
        newUser.avatar = response.secure_url;
        newUser.avatarPublicId = response.public_id;
    }

    const updateUser = await User.findByIdAndUpdate(req.user.userId, newUser);

    if (req.file && updateUser.avatarPublicId) {
        await cloudinary.uploader.destroy(updateUser.avatarPublicId);
    }

    res.status(200).json({msg: 'update successfully'});
}
