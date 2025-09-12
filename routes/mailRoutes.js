const express = require("express")
const router = express.Router()
const {MailController} = require("../controller/mailController")
router.post("/apply", MailController)
module.exports = router