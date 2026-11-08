export interface ProjectApiModel {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  demoUrl?: string;
}
