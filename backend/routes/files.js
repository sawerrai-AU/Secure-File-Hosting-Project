const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const auth = require("../middleware/auth");
const { uploadFile, getMyFiles, deleteFile } = require("../controllers/fileController");

// UPLOAD FILE
router.post("/upload", auth, upload.single("file"), uploadFile);

// GET ALL FILES FOR LOGGED USER
router.get("/myfiles", auth, getMyFiles);

// DELETE FILE
router.delete("/file/:id", auth, deleteFile);

module.exports = router;
