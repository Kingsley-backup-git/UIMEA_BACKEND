const express = require("express");
const router = express.Router();
const {
 loginHandler
} = require("../controller/authController")

// Routes
router.post("/login",loginHandler);


module.exports = router;