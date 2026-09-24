const Topic = require("../models/Topic");

// Create Topic
const createTopic = async (req, res) => {
  try {
    const topic = await Topic.create(req.body);

    res.status(201).json({
      success: true,
      data: topic,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Topics
const getTopics = async (req, res) => {
  try {
    const topics = await Topic.find().sort({ order: 1 });

    res.json({
      success: true,
      count: topics.length,
      data: topics,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createTopic,
  getTopics,
};