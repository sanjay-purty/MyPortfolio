const { z } = require("zod");
const Project = require("../models/Project");

const projectSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  features: z.array(z.string()).default([]),
  techStack: z.array(z.string()).default([]),
  image: z.string().optional().default(""),
  githubLink: z.string().optional().default(""),
  liveLink: z.string().optional().default(""),
});

const getProjects = async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
};

const getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(404);
    throw new Error("Project not found.");
  }
  res.json(project);
};

const createProject = async (req, res) => {
  const payload = projectSchema.parse(req.body);
  const project = await Project.create(payload);
  res.status(201).json(project);
};

const updateProject = async (req, res) => {
  const payload = projectSchema.partial().parse(req.body);
  const project = await Project.findByIdAndUpdate(req.params.id, payload, {
    new: true,
  });

  if (!project) {
    res.status(404);
    throw new Error("Project not found.");
  }
  res.json(project);
};

const deleteProject = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(404);
    throw new Error("Project not found.");
  }
  await project.deleteOne();
  res.json({ message: "Project deleted." });
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
