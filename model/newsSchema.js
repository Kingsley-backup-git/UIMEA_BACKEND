const mongoose = require("mongoose")

const Schema = mongoose.Schema

const NewsModel = new Schema({
  
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    imageurl: {
      type: String, 
      required: [true, "image url is required"],
    },
    eventdate: {
      type: Date, 
      required: [true, "event date is required"],
    }
   
}, { timestamps: true })
  
module.exports = mongoose.model("NewsCollection", NewsModel)