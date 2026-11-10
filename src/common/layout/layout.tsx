import { NavLink, Outlet } from "react-router";
import { appRoutes } from "../../core/router/routes";
import classes from "./layout.module.css";

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${classes.link} ${classes.active}` : classes.link;

const currentYear = new Date().getFullYear();

export const Layout = () => (
  <div className={classes.root}>
    <header className={classes.header}>
      <span className={classes.brand}>Kevin</span>
      <nav className={classes.nav}>
        <NavLink to={appRoutes.home} end className={linkClassName}>
          Inicio
        </NavLink>
        <NavLink to={appRoutes.projects} className={linkClassName}>
          Proyectos
        </NavLink>
        <NavLink to={appRoutes.skills} className={linkClassName}>
          Habilidades
        </NavLink>
      </nav>
    </header>
    <main className={classes.main}>
      <Outlet />
    </main>
    <footer className={classes.footer}>
      <span>© {currentYear} Kevin</span>
      <a
        href="https://github.com/kevinandrep/portafolio-react"
        target="_blank"
        rel="noreferrer"
      >
        Código en GitHub
      </a>
    </footer>
  </div>
);
