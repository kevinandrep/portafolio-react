import type { ProjectApiModel } from "./api/projects.api-model";
import type { ProjectVm } from "./projects.vm";

export const mapProjectFromApiToVm = (project: ProjectApiModel): ProjectVm => ({
  id: project.id,
  title: project.title,
  description: project.description,
  technologies: project.technologies,
  repoUrl: project.repoUrl,
  demoUrl: project.demoUrl ?? null,
});

export const mapProjectListFromApiToVm = (
  projects: ProjectApiModel[],
): ProjectVm[] => projects.map(mapProjectFromApiToVm);
