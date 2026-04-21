import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { fetchProjectById } from "../api/portfolioApi";
import { Loader } from "../components/Loader";

export function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setProject(await fetchProjectById(id));
      } catch {
        toast.error("Unable to load project details.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading) return <Loader />;
  if (!project) return <p className="text-slate-600 dark:text-slate-300">Project not found.</p>;

  return (
    <section className="space-y-5">
      <Helmet>
        <title>{project.title} | Project</title>
      </Helmet>
      <Link to="/projects" className="text-neon-cyan">Back to projects</Link>
      <img src={project.image || "https://placehold.co/1200x600/0b0f19/ffffff?text=Project"} alt={project.title} className="h-80 w-full rounded-2xl object-cover" />
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-slate-600 dark:text-slate-300">{project.description}</p>
      <div>
        <h3 className="mb-2 text-xl font-semibold">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {(project.techStack || []).map((tech) => (
            <span key={tech} className="rounded-full bg-black/10 px-3 py-1 text-sm dark:bg-white/10">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-xl font-semibold">Features</h3>
        <ul className="list-inside list-disc space-y-1 text-slate-600 dark:text-slate-300">
          {(project.features || []).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-3">
        {project.githubLink ? (
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn-ghost">
            GitHub
          </a>
        ) : null}
        {project.liveLink ? (
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-primary">
            Live Demo
          </a>
        ) : null}
      </div>
    </section>
  );
}
