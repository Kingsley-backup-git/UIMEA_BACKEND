const User = require("../model/authModel")
const jwt = require('jsonwebtoken');
const createAccessToken = async(id) => {
    const token = await jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" })
    return token
}
const loginHandler = async (req, res) => {

    const { email, password } = req.body
 
    
    // if (_id) {
    //       return res.status(400).json({error : "User not found"})
    // }
    try {
        if (!email || !password) {
            return res.status(400).json({error : "email or password required"})
        }
        const user = await User.login(email, password)
       const token =  await createAccessToken(user._id)
        return res.status(200).json({data : {user, accessToken : token}})
    } catch (error) {
        return res.status(400).json({error : error?.message})
    }
  
}

module.exports = {loginHandler}