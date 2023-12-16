const express = require("express");
const { createRoom, joinRoom, deleteRoom } = require("../controllers/chatRoomController");
const { protect } = require("../middlewares/authMiddleware");
const { createJoinRoomValidator } = require("../middlewares/validators/chatRoomValidator");

const router = express.Router();

router.post("/create", protect, createJoinRoomValidator, createRoom);
router.post("/join", protect, createJoinRoomValidator, joinRoom);
router.delete("/delete/:room", protect, deleteRoom);

module.exports = router;