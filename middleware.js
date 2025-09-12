const jwt = require('jsonwebtoken');
require("dotenv").config()
const User = require("./model/authModel")
const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization || !authorization.startsWith("Bearer")) {
        return res.status(401).json({error : "Unauthorized User"})
    }
    const token = authorization.split(" ")[1]
    if (!token) {
         return res.status(401).json({error : "Unauthorized User"})
    }
    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    req.user = await User.findById(decodedToken.id).select("_id")

      next()
    } catch (error) {
         return res.status(401).json({error : "Invalid or Expired Token"})
    }
}

module.exports = requireAuth