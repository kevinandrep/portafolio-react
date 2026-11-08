import type { ProjectVm } from "./projects.vm";
import classes from "./projects.module.css";

interface Props {
  projects: ProjectVm[];
}

export const ProjectsComponent = ({ projects }: Props) => (
  <ul className={classes.list}>
    {projects.map((project) => (
      <li key={project.id} className={classes.card}>
        <h2 className={classes.title}>{project.title}</h2>
        <p>{project.description}</p>
        <ul className={classes.tags}>
          {project.technologies.map((tech) => (
            <li key={tech} className={classes.tag}>
              {tech}
            </li>
          ))}
        </ul>
        <div className={classes.links}>
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            Repositorio
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
        </div>
      </li>
    ))}
  </ul>
);
