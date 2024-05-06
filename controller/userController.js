const userModel = require("../model/userModel");
const bcrypt = require('bcrypt');

const getAllUser = async (req, res) =>{
    try {
        const allUser = await userModel.find();

        if(allUser){
            return res.status(200).json({
                data: allUser,
                message: "User successfully",
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
};


const registerUser  = async (req, res) =>{
    try {
        const { username, email, password, role, contact} = req.body;

        const userCheck = await userModel.findOne({ email: email});

        if(userCheck){
            return res.status(400).json({
                message: 'User already exists'
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            username: username,
            email:email,
            password: hashPassword,
            role: role,
            contact: contact,
        })

        await newUser.save();

        if(newUser){
            return res.status(201).json({
                data: newUser,
                message: 'user register successful'
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
};

const loginUser = async (req, res) =>{
    try {
        const { email, password} = req.body;

        const user = await userModel.findOne({ email });
        if(!user){
            return res.status(401).json({
                message: "Invalid email or password",
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(isPasswordValid){
            return res.json({
                message: "Invalid email or password"
            });
        }
        delete user.password;
        return res.json({
            status: true,
            user
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
}

module.exports = {
    getAllUser,
    registerUser,
    loginUser,
}