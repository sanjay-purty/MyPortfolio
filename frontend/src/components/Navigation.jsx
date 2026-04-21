import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/40">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold text-slate-900 dark:text-white">
          Sanjay<span className="text-neon-cyan">.</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? "text-neon-cyan" : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <span className="text-slate-900 dark:text-white">Menu</span>
        </button>
      </div>
      {open ? (
        <div className="container-page flex flex-col gap-3 pb-4 md:hidden">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className="text-slate-600 dark:text-slate-300">
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      ) : null}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white/50 pb-8 pt-16 dark:border-white/10 dark:bg-black/20">
      <div className="container-page grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <Link to="/" className="mb-4 inline-block font-display text-2xl font-bold text-slate-900 dark:text-white">
            Sanjay<span className="text-neon-cyan">.</span>
          </Link>
          <p className="max-w-sm text-sm text-slate-400">
            Crafting premium, dynamic web experiences with the MERN stack. Available for freelance opportunities and exciting projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <Link to="/about" className="transition-colors hover:text-neon-cyan">About</Link>
            </li>
            <li>
              <Link to="/projects" className="transition-colors hover:text-neon-cyan">Projects</Link>
            </li>
            <li>
              <Link to="/skills" className="transition-colors hover:text-neon-cyan">Skills</Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-neon-cyan">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Socials & Contact */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Connect</h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/sanjay-purty"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="text-slate-400 transition-colors hover:text-neon-cyan"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="text-slate-400 transition-colors hover:text-neon-cyan"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="mailto:contact@sanjaypurty.com"
              title="Email Address"
              className="text-slate-400 transition-colors hover:text-neon-cyan"
            >
              <span className="sr-only">Email Address</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container-page mt-12 flex flex-col items-center justify-between border-t border-black/10 pt-8 text-sm text-slate-500 dark:border-white/10 md:flex-row">
        <p>© {new Date().getFullYear()} Sanjay Purty. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed with modern aesthetics & built with MERN.</p>
      </div>
    </footer>
  );
}
