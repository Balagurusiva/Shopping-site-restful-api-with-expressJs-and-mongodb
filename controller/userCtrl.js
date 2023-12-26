import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'

//controller to create a user 
const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email

    const user = await User.findOne({ email })

    if (!user) { 
        const password = bcrypt.hashSync(req.body.password, 10)
        const newUser = User.create({...req.body, password})
        res.status(200).json({
            "msg": "user created "
        })
    } else {
         throw new Error("User Already Exits")
    }
})

export default createUser