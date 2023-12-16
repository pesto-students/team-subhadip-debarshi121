const express = require("express");
const {createAsset, getAssets, deleteAsset, updateAsset} = require("../controllers/assetsController");
const {protect} = require("../middlewares/authMiddleware");
const {createValidator, updateValidator} = require("../validators/assetValidator");

const router = express.Router();

router.get("/", protect, getAssets);
router.post("/", protect, createValidator, createAsset);
router.delete("/:id", protect, deleteAsset);
router.put("/:id", protect, updateValidator, updateAsset);

module.exports = router;
