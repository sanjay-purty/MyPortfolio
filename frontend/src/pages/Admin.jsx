import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createProject, deleteProject, fetchProjects } from "../api/portfolioApi";
import { Button } from "../components/Button";

const initialState = {
  title: "",
  description: "",
  features: "",
  techStack: "",
  image: "",
  githubLink: "",
  liveLink: "",
};

export function Admin() {
  const [form, setForm] = useState(initialState);
  const [projects, setProjects] = useState([]);
  const token = localStorage.getItem("adminToken");

  const loadProjects = async () => setProjects(await fetchProjects());
  useEffect(() => {
    loadProjects();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProject(
        {
          ...form,
          features: form.features.split(",").map((s) => s.trim()).filter(Boolean),
          techStack: form.techStack.split(",").map((s) => s.trim()).filter(Boolean),
        },
        token
      );
      toast.success("Project created.");
      setForm(initialState);
      loadProjects();
    } catch {
      toast.error("Failed to create project.");
    }
  };

  const onDelete = async (id) => {
    try {
      await deleteProject(id, token);
      toast.success("Project deleted.");
      loadProjects();
    } catch {
      toast.error("Delete failed.");
    }
  };

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Admin</h1>
      <form className="card grid gap-3 p-5" onSubmit={onSubmit}>
        <input className="rounded-xl bg-black/5 p-3 dark:bg-white/5" placeholder="Title" value={form.title} onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))} />
        <textarea className="rounded-xl bg-black/5 p-3 dark:bg-white/5" placeholder="Description" value={form.description} onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))} />
        <input className="rounded-xl bg-black/5 p-3 dark:bg-white/5" placeholder="Features (comma separated)" value={form.features} onChange={(e) => setForm((p) => ({ ...p, features: e.target.value }))} />
        <input className="rounded-xl bg-black/5 p-3 dark:bg-white/5" placeholder="Tech Stack (comma separated)" value={form.techStack} onChange={(e) => setForm((p) => ({ ...p, techStack: e.target.value }))} />
        <input className="rounded-xl bg-black/5 p-3 dark:bg-white/5" placeholder="Image URL" value={form.image} onChange={(e) => setForm((p) => ({ ...p, image: e.target.value }))} />
        <input className="rounded-xl bg-black/5 p-3 dark:bg-white/5" placeholder="GitHub URL" value={form.githubLink} onChange={(e) => setForm((p) => ({ ...p, githubLink: e.target.value }))} />
        <input className="rounded-xl bg-black/5 p-3 dark:bg-white/5" placeholder="Live URL" value={form.liveLink} onChange={(e) => setForm((p) => ({ ...p, liveLink: e.target.value }))} />
        <Button type="submit">Add Project</Button>
      </form>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project._id} className="card p-4">
            <h3 className="font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
            <Button className="mt-3" variant="ghost" onClick={() => onDelete(project._id)}>Delete</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
