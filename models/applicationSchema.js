import mongoose from "mongoose";
import validator from "validator";

const applicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name!"],
        minLength: [3, "Name from must contain at least 3 characters!"],
        maxLength: [30, "Name from cannot exceed 30 characters!"],
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Please provide a valid email!"],
        required: [true, "Please provide your email!"],
    },
    coverLetter: {
        type: String,
        require: [true, "Please provide your Cover Letter!"],
    },
    phone: {
        type: Number,
        required: [true, "Please provide your Phone Number!"],
    },
    address: {
        type: String,
        required: [true, "Please provide your address!"]
    },
    resume: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    applicantID: {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        role: {
            type: String,
            enum: ["Job Seeker"],
            required: true
        }
    },
    employerID: {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        role: {
            type: String,
            enum: ["Employer"],
            required: true
        }
    },
    status: {
        type: String,
        enum: ["applied", "archived", "forwarded"],
        default: "applied", // Default status when application is created
    },
});

export const Application = mongoose.model("Application", applicationSchema);