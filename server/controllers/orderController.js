import { BadRequestError } from "../errors/customErrors.js";
import Order from "../models/Order.js";


export const getAllOrders = async (req, res) => {
    if (req.user.role === "admin") {
        const allOrders = await Order.find({});
        return res.status(200).json({ allOrders });
    }
    const allOrders = await Order.find({ createdBy: req.user.userId });
    res.status(200).json({ allOrders });
};

export const createOrder = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const { cartItems } = req.body;

    if (!cartItems || Object.keys(cartItems).length < 1) {
        throw new BadRequestError('No cart items provided');
    };
    await Order.create(req.body);
    res.status(200).json({ msg: 'Order successfully' });
};

export const getOrder = async (req, res) => {
    const order = await Order.findById(req.params.id)
    res.status(200).json({ order });
};


export const deleteOrder = async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: 'Order deleted' });
};