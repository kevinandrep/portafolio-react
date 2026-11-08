export interface ProjectVm {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  demoUrl: string | null;
}
