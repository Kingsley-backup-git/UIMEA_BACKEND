require("dotenv").config()
const nodeMailer = require("nodemailer")
const nodemailerSendgrid = require('nodemailer-sendgrid');
const transport = nodeMailer.createTransport(
nodemailerSendgrid({
     apiKey: process.env.API_KEY
  })
);

module.exports = transport