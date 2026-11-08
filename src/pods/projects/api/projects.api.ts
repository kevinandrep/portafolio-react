import type { ProjectApiModel } from "./projects.api-model";
import { projectsData } from "./projects.data";

export const getProjects = (): Promise<ProjectApiModel[]> =>
  Promise.resolve(projectsData);
