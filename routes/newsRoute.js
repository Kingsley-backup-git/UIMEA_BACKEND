const express = require("express");
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })
const router = express.Router();
const {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews
} = require("../controller/newsController")
const requireAuth = require("../middleware")
// Routes
router.post("/add", upload.single('image') ,requireAuth,createNews);
router.get("/",getAllNews);
router.get("/:id", getNewsById);
router.patch("/:id", requireAuth,updateNews);
router.delete("/:id",requireAuth, deleteNews);

module.exports = router;