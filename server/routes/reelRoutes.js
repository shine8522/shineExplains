const express = require("express");

const {
  createReel,
  getReels,
  getReelsByTopic,getReelBySlug
} = require("../controller/reelController");

const router = express.Router();

router.post("/", createReel);
router.get("/", getReels);
router.get("/topic/:slug", getReelsByTopic);
router.get("/:slug", getReelBySlug);
module.exports = router;