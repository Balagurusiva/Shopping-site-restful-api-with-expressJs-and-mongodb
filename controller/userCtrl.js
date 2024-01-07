import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'

//controller to create a user 
export const createUser = async (req, res) => {
    const email = req.body.email
    const user = await User.findOne({ email })
    if (!user) { 
        const password = bcrypt.hashSync(req.body.password, 10)
        const newUser = User.create({...req.body, password})
        res.status(200).json({
            "msg": "user created "
        })
    } else {
         res.status(403).json({
            msg:"User already exists"
         })
    }
}

//controller to login the user
export const login = async(req,res) => {
    let {email, password} = req.body

    const user = await User.findOne({email})
    const isPasswordMatched = await bcrypt.compare(password, user.password)
    if(user && isPasswordMatched){
        res.status(200).json(user)
    }else{
         res.status(401).json({
            msg:"Invalid data"
         })
    }
}