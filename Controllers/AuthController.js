import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'


// Registring new User
export const signup = async(req,res)=>{
    const {username,email,password} = req.body;

    const salt = await bcrypt.genSalt(10)
    const hashpass= await bcrypt.hash(password,salt)

    const newUser = new UserModel({username,email,password:hashpass})

    try {
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }


}