import User from '../models/userModel.js'

const createUser = async (req,res) => {
    const email = req.body.email

    const user = await User.findOne({email})

    if(!user){
        const newUser = User.create(req.body)
        res.status(200).json({
            "msg":"user created "
        })
    }else{
        res.status(403).json({
            msg:"user already exits",
            success:false
        })
    }
}

export default createUser