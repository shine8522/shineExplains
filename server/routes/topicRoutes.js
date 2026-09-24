const express = require("express");

const {
  createTopic,
  getTopics,
} = require("../controller/topicController");

const router = express.Router();

router.post("/", createTopic);

router.get("/", getTopics);

module.exports = router;