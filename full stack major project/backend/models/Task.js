const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);
