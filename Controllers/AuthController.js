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

// login User

export const loginUser = async(req,res)=>{
    const {email,password} = req.body
    console.log(email);

    try {
        const user= await UserModel.findOne({email:email})

        if(user){
            console.log(user);
            const validity = await bcrypt.compare(password,user.password)

            validity? res.status(200).json(user):res.status(400).json("Wrong Password")
        }
        else{
            res.status(404).json("User does not exists")
        }
    } catch (error) {
        res.status(500).json({message:error.me})
        
    }
}