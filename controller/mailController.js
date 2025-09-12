const express = require("express")
const {sendEmail, userMail} = require("../service/mailService")
const MailController = async (req, res) => {
    const { firstName, lastName, email, phoneNo, YoG, currentOrg } = req.body
     
  console.log(req.body)
    try {
        if (!firstName || !lastName || !email || !phoneNo || !YoG) {
          return  res.status(400).json({error : "All fields required"})
        }
      
        
        await Promise.all([  await sendEmail({
      firstName,
      lastName,
      email,
      phoneNo,
      YoG,
      currentOrg,
        }), await userMail({
      firstName,
      lastName,
      email,
      phoneNo,
      YoG,
      currentOrg,
        })])

      
        
        return res.status(200).json({message : "Application Sent Successfully"})

    } catch (error) {
         console.error("MailController Error:", error?.message);
      return  res.status(500).json({error : "Internal Server Error"})
    }
}

module.exports = {
    MailController
}