import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'
import { tokenGenratetor } from '../config/jwtToken.js'

//controller to create a user 
export const createUser = async (req, res) => {
    try {
        const email = req.body.email
        const user = await User.findOne({ email })
        if (!user) {
            const password = bcrypt.hashSync(req.body.password, 10)
            await User.create({ ...req.body, password })
            let user = await User.findOne({email},{password:0}).lean()
            res.status(200).json({
                "msg": "user created",
                "data":{...user}
            })
        } else {
            res.status(403).json({
                msg: "User already exists"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'msg': "server error" })
    }

}

//controller to login the user
export const login = async (req, res) => {
    try {
        let { email, password } = req.body
        const user = await User.findOne({ email })
        const isPasswordMatched = await bcrypt.compare(password, user.password)
        if (user && isPasswordMatched) {
            res.status(200).json({
                "_id": user?._id,
                "firstName": user?.firstName,
                "lastName": user?.lastName,
                "email": user?.email,
                "mobile": user?.mobile,
                "token": tokenGenratetor(user.id)
            })
        } else {
            res.status(401).json({
                msg: "Invalid data"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({"msg":"server error"})
    }

}