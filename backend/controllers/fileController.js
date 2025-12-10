const File = require("../models/File");
const path = require("path");

// UPLOAD FILE
exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const newFile = new File({
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
      privacy: req.body.privacy || "public",
      uploadedAt: new Date(),
    });

    await newFile.save();

    return res.json({ message: "File uploaded", file: newFile });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error uploading file" });
  }
};

// GET ALL FILES FOR LOGGED-IN USER
exports.getMyFiles = async (req, res) => {
  try {
    const files = await File.find();
    return res.json(files);
  } catch (err) {
    return res.status(500).json({ message: "Could not load files" });
  }
};

// DELETE A FILE
exports.deleteFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    await File.findByIdAndDelete(req.params.id);
    return res.json({ message: "File deleted" });
  } catch (err) {
    return res.status(500).json({ message: "Could not delete file" });
  }
};
