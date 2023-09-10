import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToke.js";

// @desc auth user set token
//route POST API/users/auth
//@access public
const authUser = asyncHandler(async (req, res) => {
    const user = await user.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    }

    else {
        res.status(201);
        throw new Error('incorrect email or password')
    }
});

//route POST API/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("user already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error("invalid user data");
    }
    res.status(200).json({ message: "Auth user" });
});

//route POST API/users/logout
//@access public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "logout user" });
});

//route POST API/users/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "user profile" });
});

//route PUT API/users/profile
//@access private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "user profile" });
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
};
