import { Router } from "express";
import { login, logout, register } from "../controllers/authController.js";
import { validateLoginInput, validateRegisterInput } from "../middleware/validateMiddleware.js";
const router = Router();

router.post('/register',validateRegisterInput, register);
router.post('/login',validateLoginInput, login);
router.get('/logout', logout);

export default router;