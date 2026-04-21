import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">Page not found.</p>
      <Link to="/" className="mt-5 inline-block text-neon-cyan">
        Go Home
      </Link>
    </section>
  );
}
