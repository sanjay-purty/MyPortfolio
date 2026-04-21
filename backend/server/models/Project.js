const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    features: [{ type: String, trim: true }],
    techStack: [{ type: String, trim: true }],
    image: { type: String, default: "" },
    githubLink: { type: String, default: "" },
    liveLink: { type: String, default: "" },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Project", projectSchema);
