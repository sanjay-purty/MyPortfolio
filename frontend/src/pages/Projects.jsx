import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { fetchProjects } from "../api/portfolioApi";
import axios from "axios";
import { Loader } from "../components/Loader";
import { ProjectCard } from "../components/ProjectCard";
import toast from "react-hot-toast";

const projectImageMap = [
  { keywords: ["portfolio", "personal"], image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80" },
  { keywords: ["chat", "messag"], image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80" },
  { keywords: ["ecom", "shop", "store"], image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80" },
  { keywords: ["blog", "cms"], image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?auto=format&fit=crop&w=1200&q=80" },
  { keywords: ["auth", "login", "jwt"], image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80" },
  { keywords: ["dashboard", "admin"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" },
  { keywords: ["task", "todo"], image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80" },
  { keywords: ["weather"], image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80" },
  { keywords: ["movie"], image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80" },
  { keywords: ["travel"], image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80" },
  { keywords: ["calculator", "calc"], image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=1200&q=80" },
];

const getRelevantImage = (title, fallback) => {
  const normalized = (title || "").toLowerCase();
  const match = projectImageMap.find((entry) => entry.keywords.some((key) => normalized.includes(key)));
  return match?.image || fallback;
};

export function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [portfolioProjects, githubResponse] = await Promise.all([
          fetchProjects().catch(() => []),
          axios.get("https://api.github.com/users/sanjay-purty/repos?sort=updated&per_page=12"),
        ]);

        const githubProjects = githubResponse.data.map((repo) => ({
          _id: `github-${repo.id}`,
          title: repo.name,
          description: repo.description || "GitHub repository project.",
          techStack: repo.language ? [repo.language] : [],
          githubLink: repo.html_url,
          liveLink: repo.homepage || "",
          image: `https://opengraph.githubassets.com/1/sanjay-purty/${repo.name}`,
          isGithubProject: true,
        }));

        const merged = [...portfolioProjects, ...githubProjects].map((project) => ({
          ...project,
          image: getRelevantImage(
            project.title,
            project.image || "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80"
          ),
        }));

        setProjects(merged);
      } catch {
        toast.error("Failed to load projects.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section>
      <Helmet>
        <title>Projects | Sanjay Purty</title>
      </Helmet>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
          Explore featured work in an interactive card layout. Each project includes detailed features, tech stack, and live links.
        </p>
        {loading ? <Loader /> : null}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
