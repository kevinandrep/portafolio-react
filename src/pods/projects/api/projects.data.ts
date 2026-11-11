import type { ProjectApiModel } from "./projects.api-model";

export const projectsData: ProjectApiModel[] = [
  {
    id: "portafolio-react",
    title: "Portafolio personal",
    description:
      "Portafolio con Vite, React y TypeScript, organizado por pods y desarrollado con un flujo de trabajo en equipo.",
    technologies: ["React", "TypeScript", "Vite", "CSS Modules"],
    repoUrl: "https://github.com/kevinandrep/portafolio-react",
  },
  {
    id: "proyecto-ejemplo-1",
    title: "Proyecto de ejemplo 1",
    description:
      "Descripción provisional. La reemplazaremos por un proyecto real.",
    technologies: ["Next.js", "Prisma"],
    repoUrl: "https://github.com/kevinandrep",
  },
  {
    id: "proyecto-ejemplo-2",
    title: "Proyecto de ejemplo 2",
    description:
      "Descripción provisional. La reemplazaremos por un proyecto real.",
    technologies: ["Docker"],
    repoUrl: "https://github.com/kevinandrep",
  },
];
