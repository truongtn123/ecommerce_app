import mongoose, { Mongoose } from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        cartItems: Object,
        cartTotal: Number,
        shipping: Number,
        location: String,
        tax: Number,
        orderTotal: Number,
        name: String,
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);

export default mongoose.model("orders", OrderSchema);