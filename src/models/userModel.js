import jwt from "jsonwebtoken";
import mongoose from "mongoose";


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "user first name is required"],
        maxlength: [12, "firstname should be at least 12 character"],
        trim: true
    },
    lastname: {
        type: String,
        maxlength: [12, "lastname should be at least 12 character"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "user email is required"],
        lowercase: true,
        unique: true,
        trim: true,
        validate: {
            validator: (value) => emailRegex.test(value),
            message: 'Invalid email format',
        }
    },
    password: {
        type: String,
        required: [true, "user password is required"],
        minlength: [6, "password should be at least 6 character"],
        trim: true
    },
    phone: {
        type: String,
        required: [true, "user phone number is required"],
        trim: true
    },
    gender: {
        type: String,
        required: [true, "gender is required"],
        enum: ["Male", "Female"]
    },
    country: {
        type: String,
        required: [true, "country is required"]
    },
    photo: {
        type: String,
        default: "avater.png"
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Employer", "Student"],
    }
}, { timestamps: true });


// jwt token
// userSchema.methods.generateToken = async function () {
//     try {
//         return jwt.sign({
//             userId: this._id.toString(),
//             user: this
//         },
//             process.env.JWT_SECRET_KEY,
//             {
//                 expiresIn: "2m"
//             }
//         )

//     } catch (err) {
//         console.error(err.message)
//     }
// };
const User = mongoose.model("User", userSchema);

export default User;