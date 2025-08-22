import { useEffect, useState } from "react";

interface Project {
  image: string;
  title: string;
  description: string;
  github: string;
  live?: string;
}

export function useGistProjects(gistId: string) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);

        if (!gistId) throw new Error("No gistId provided");

        const res = await fetch(
          `https://gist.githubusercontent.com/matiyasjosh/${gistId}/raw/project.json?cachebust=${new Date().getTime()}`
        );
        if (!res.ok) throw new Error("Failed to fetch gist");
        
        const text = await res.text();
        const data: Project[] = JSON.parse(text);
        setProjects(data);
      } catch (err: any) {
        setError(err.message);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [gistId]);

  return { projects, loading, error };
}
