const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, { timestamps: true });
userSchema.statics.login = async function (email,password) {
    if (!email || !password) {
        throw Error("email or password required")
    }

    const user = await this.findOne({ email })
    
    if (!user) {
              throw Error("email does not exist")
    }

    return user
}


module.exports = mongoose.model("UserAuth", userSchema);
