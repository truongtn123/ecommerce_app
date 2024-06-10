import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import 'express-async-errors';
import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from "cloudinary";

import connectDB from "./db/connectDB.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";

import productRouter from "./routes/productRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import orderRouter from "./routes/orderRouter.js";

//middleware
import { authenticateUser } from "./middleware/authMiddleware.js";

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, './public')));

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/v1/products', authenticateUser, productRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', authenticateUser, userRouter);
app.use('/api/v1/order', authenticateUser, orderRouter);

app.get('/test', (req, res) => {
    res.send('test success');
  });

app.use('*', (req, res) => {
    res.status(404).json({ msg: 'page not found' });
});

app.use(errorMiddleware);

const port = process.env.PORT || 8080;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is running on PORT: ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start();