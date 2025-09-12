const transport = require("../config/mailConfig")
require("dotenv").config()
const sendEmail = async ({ firstName, lastName, email, phoneNo, YoG, currentOrg }) => {
    try {
 const mailOptions = {
        from : process.env.SENDGRID_MAIL,
        to: 'membership@uimea.com.ng',
        subject: "New Membership Application Submitted",
        html : `<p>Hello Admin,</p>
<p>A new membership application has been submitted:</p>
<li>First Name:${firstName}</li>
        <li>Last Name:${lastName}</li>
        <li>Email:${email}</li>
        <li>Phone Number:${phoneNo}</li>
        <li>Year of Graduation:${YoG}</li>
        <li>Current Organization:${currentOrg}</li>
        
        <p>You may review the application and reach out to the applicant if necessary</p>
        <p>Best regards,</p>
        <p>UIMEA</p>`
    }
const info = await transport.sendMail(mailOptions);
console.log("✅ Mail sent:", info);
return info
    } catch(error) {
        console.log(error?.message)
       throw error
       
    }
   
}

const userMail = async ({ firstName, lastName, email, phoneNo, YoG, currentOrg }) => {
    try {
 const mailOptions = {
        from : process.env.SENDGRID_MAIL,
        to: email,
        subject: "New Membership Application Submitted",
        html : `<p>Dear ${firstName},</p>

<p>Thank you for applying for membership with <strong>UIMEA</strong>. We have received your application successfully.</p>

<p><strong>Your submitted details:</strong></p>
<ul>
  <li>First Name: ${firstName}</li>
  <li>Last Name: ${lastName}</li>
  <li>Email: ${email}</li>
  <li>Phone Number: ${phoneNo}</li>
  <li>Year of Graduation: ${YoG}</li>
  <li>Current Organization: ${currentOrg}</li>
</ul>

<p>Our team will carefully review your application and get back to you shortly with the next steps.</p>

<p>We truly appreciate your interest in being part of our community.</p>

<p>Best regards,</p>
<p><strong>UIMEA</strong></p>`
    }
const info = await transport.sendMail(mailOptions);
console.log("✅ Mail sent:", info);
return info
    } catch(error) {
           console.log(error?.message)
       throw error
       
    }
   
}


module.exports = {sendEmail, userMail}