import mongoose from "mongoose";

const UserChema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    location: String,
    avatar: String,
    avatarPublicId: String,
    },
    { timestamps: true }
);

UserChema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
};

export default mongoose.model('User', UserChema);