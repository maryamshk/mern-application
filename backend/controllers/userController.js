import asyncHandler from 'express-async-handler';

// @desc auth user set token
//route POST API/users/auth
//@access public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "auth user" })
})

export { authUser };