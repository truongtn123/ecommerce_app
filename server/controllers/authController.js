import { UnauthenticatedError } from "../errors/customErrors.js";
import User from "../models/User.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
    const isFirstAccount = (await User.countDocuments()) === 0;
    req.body.role = isFirstAccount ? 'admin' : 'user';

    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    const user = await User.create(req.body);
    res.status(201).json({ user, msg: "Register successfully" });
};

export const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    const isValidUser = user && (await comparePassword(req.body.password, user.password));

    if (!isValidUser) throw new UnauthenticatedError('invalid credentials');

    const token = createJWT({ userId: user._id, role: user.role })

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: false,
    }
    );

    res.status(201).json({ msg: 'Login successfully' });
};

export const logout = (req, res) => {
    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: false,
    });
    res.status(200).json({ msg: 'user logged out' });
};