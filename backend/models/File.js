const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  filename: { type: String, required: true },              // stored filename in uploads folder
  originalName: { type: String },                          // original user-uploaded name
  path: { type: String, required: true },                  // file path in server
  size: { type: Number },                                  // file size in bytes
  privacy: { type: String, enum: ["public", "private"], default: "public" },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  uploadedAt: { type: Date, default: Date.now },
  shareId: { type: String }                                // unique link for private files
});

module.exports = mongoose.model("File", FileSchema);
