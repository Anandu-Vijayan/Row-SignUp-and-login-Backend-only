import mongoose from "mongoose"


const UserSchema = mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }

    }
)

const UserModel=mongoose.model("SignUp",UserSchema)

export default UserModel