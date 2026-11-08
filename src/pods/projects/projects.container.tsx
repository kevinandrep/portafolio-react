import { useEffect, useState } from "react";
import { getProjects } from "./api/projects.api";
import { ProjectsComponent } from "./projects.component";
import { mapProjectListFromApiToVm } from "./projects.mapper";
import type { ProjectVm } from "./projects.vm";

export const ProjectsContainer = () => {
  const [projects, setProjects] = useState<ProjectVm[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    getProjects().then((data) => {
      if (!cancelled) {
        setProjects(mapProjectListFromApiToVm(data));
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!projects) {
    return <p>Cargando proyectos…</p>;
  }

  return <ProjectsComponent projects={projects} />;
};
