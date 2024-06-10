import { Router } from "express";
import { createOrder, deleteOrder, getAllOrders, getOrder } from "../controllers/orderController.js";
import { validateOrderInput, validateParamOrder } from "../middleware/validateMiddleware.js";
const router = Router();

router.route('/')
    .get(getAllOrders)
    .post(createOrder);

router.route('/:id')
    .get(validateParamOrder, getOrder)
    .delete(validateParamOrder, deleteOrder);

export default router;