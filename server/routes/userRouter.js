import { Router } from "express";
import { getAllUsers, getApplicationStats, getCurrentUser, updateUser } from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validateMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
import { authorizePermisstions } from "../middleware/authMiddleware.js";
const router = Router();


router.get('/current-user', getCurrentUser);
router.patch('/update-user', upload.single('avatar'),validateUpdateUserInput,updateUser);
router.get('/admin', [authorizePermisstions('admin') ,getApplicationStats]);
router.get('/admin/all-users', [authorizePermisstions('admin') ,getAllUsers]);

export default router;