const express = require("express");
const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const { requireAdmin } = require("../middleware/authMiddleware");
const { asyncHandler } = require("../middleware/asyncHandler");

const router = express.Router();

router.get("/", asyncHandler(getProjects));
router.get("/:id", asyncHandler(getProjectById));
router.post("/", requireAdmin, asyncHandler(createProject));
router.put("/:id", requireAdmin, asyncHandler(updateProject));
router.delete("/:id", requireAdmin, asyncHandler(deleteProject));

module.exports = router;
