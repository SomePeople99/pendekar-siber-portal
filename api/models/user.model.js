import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: 'https://i.stack.imgur.com/34AD2.jpg',
    },
    education: {
        type: String,
        default: '',
    },
    accomplishment: {
        type: String,
        default: '',
    },
    interest: {
        type: String,
        default: '',
    },
    personalityType: {
        type: String,
        default: '',
    },
    quiz1: {
        type: Number,
        default: '',
    },
    quiz2: {
        type: Number,
        default: '',
    },
    quiz3: {
        type: Number,
        default: '',
    },

    isAdmin:{
        type: Boolean,
        default: false,
    },

    isRegistered: {
        type: Boolean,
        default: true,
    }
}, {timestamps: true});

const User = mongoose.model ('User', userSchema);

export default User;

//export default mongoose.model('User', UserSchema);
