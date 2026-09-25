const Reel = require("../models/Reel");
const Topic = require("../models/Topic");

// Create Reel
const createReel = async (req, res) => {
  try {
    const reel = await Reel.create(req.body);

    res.status(201).json({
      success: true,
      data: reel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Reels
const getReels = async (req, res) => {
  try {
    const reels = await Reel.find()
      .populate("topicId", "name slug")
      .sort({ order: 1 });

    res.json({
      success: true,
      count: reels.length,
      data: reels,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Reels by Topic Slug
const getReelsByTopic = async (req, res) => {
  try {
    const topic = await Topic.findOne({
      slug: req.params.slug,
    });

    if (!topic) {
      return res.status(404).json({
        success: false,
        message: "Topic not found",
      });
    }

    const reels = await Reel.find({
      topicId: topic._id,
    }).sort({ order: 1 });

    res.json({
      success: true,
      topic: topic.name,
      count: reels.length,
      data: reels,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get Single Reel by Slug
const getReelBySlug = async (req, res) => {
  try {
    const reel = await Reel.findOne({
      slug: req.params.slug,
    }).populate("topicId", "name slug");

    if (!reel) {
      return res.status(404).json({
        success: false,
        message: "Reel not found",
      });
    }

    res.json({
      success: true,
      data: reel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createReel,
  getReels,
  getReelsByTopic,getReelBySlug
};