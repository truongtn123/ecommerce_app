import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        company: String,
        name: String,
        description: String,
        colors: Array,
        price: Number,
        location: String,
        image: String,
        imagePublicId: String,
    },
    { timestamps: true }
);

export default mongoose.model("Products", ProductSchema);