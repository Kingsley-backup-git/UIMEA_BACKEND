const NewsCollection = require("../model/newsSchema");


const createNews = async (req, res) => {
  const { title, description, date } = req.body
  if (!title || !description || !date) {
    return  res.status(400).json({ error: "All Fields required"});
  }
  try {
    
    const news = new NewsCollection({
      title,
      description,
      eventdate: date,
      imageurl : req.file.path
    })
    news.save()
    res.status(201).json({data:news});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const getAllNews = async (req, res) => {
  try {
    const newsList = await NewsCollection.find({}).sort({ createdAt: -1 });
      console.log(newsList)
    return res.status(200).json({data : newsList});
  
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};


const getNewsById = async (req, res) => {
  try {
    const news = await NewsCollection.findById(req.params.id);
    if (!news) return res.status(404).json({ error: "news not found" });
    res.json({data: news});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateNews = async (req, res) => {
  try {
    const updatedNews = await NewsCollection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedNews) return res.status(404).json({ error: "news not found" });
    res.json({data:updatedNews});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const deleteNews = async (req, res) => {
  try {
    const deletedNews = await NewsCollection.findByIdAndDelete(req.params.id);
    if (!deletedNews) return res.status(404).json({ error: "news not found" });
    res.json({ message: "news deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews
};
