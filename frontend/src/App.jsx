import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IntroScreen } from "./components/IntroScreen";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { ProjectDetails } from "./pages/ProjectDetails";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";
import { Admin } from "./pages/Admin";
import { NotFound } from "./pages/NotFound";
import { ProtectedRoute } from "./components/ProtectedRoute";

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return true;
    return !localStorage.getItem("hasSeenIntro");
  });

  const handleCompleteIntro = () => {
    localStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
  };

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "projects", element: <Projects /> },
            { path: "projects/:id", element: <ProjectDetails /> },
            { path: "skills", element: <Skills /> },
            { path: "contact", element: <Contact /> },
            {
              path: "admin",
              element: (
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              ),
            },
            { path: "*", element: <NotFound /> },
          ],
        },
      ]),
    []
  );

  return (
    <AnimatePresence mode="wait">
      {showIntro ? (
        <IntroScreen key="intro" onComplete={handleCompleteIntro} />
      ) : (
        <RouterProvider key="router" router={router} />
      )}
    </AnimatePresence>
  );
}
