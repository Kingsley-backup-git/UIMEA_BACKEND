const express = require("express")
 const path = require("path");
require("dotenv").config()
const cors = require('cors')
const ApplicationRoute = require("./routes/mailRoutes")
const AuthRoute = require("./routes/authRoute")
const NewsRoute = require("./routes/newsRoute")
const mongoose = require("mongoose")
const app = express()
app.use(cors({
    origin : ["http://localhost:5173","http://localhost:5174", "https://uimea.vercel.app", "https://uimea-admin.vercel.app"]
}))
app.use(express.json())
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/membership", ApplicationRoute)
app.use("/api/auth", AuthRoute)
app.use("/api/news",NewsRoute)


mongoose.connect(process.env.MONGODB_URL).then(() => {
    app.listen(4000, () => {
    console.log("listening to port 4000")
})
})
