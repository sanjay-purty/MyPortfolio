import { Link } from "react-router-dom";
import { Button } from "./Button";

export function ProjectCard({ project }) {
  const showDetails = !project.isGithubProject && project._id;

  return (
    <article className="card group p-5">
      <img
        src={project.image || "https://placehold.co/800x450/0b0f19/ffffff?text=Project"}
        alt={project.title}
        className="h-48 w-full rounded-xl object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {(project.techStack || []).map((tech) => (
          <span key={tech} className="rounded-full bg-black/10 px-2 py-1 text-xs dark:bg-white/10">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-3">
        {showDetails ? (
          <Link to={`/projects/${project._id}`}>
            <Button>Details</Button>
          </Link>
        ) : null}
        {project.githubLink ? (
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <Button variant="ghost">GitHub</Button>
          </a>
        ) : null}
        {project.liveLink ? (
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            <Button variant="ghost">Live Demo</Button>
          </a>
        ) : null}
      </div>
    </article>
  );
}
