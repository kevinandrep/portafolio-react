import { NavLink, Outlet } from "react-router";
import { appRoutes } from "../../core/router/routes";
import classes from "./layout.module.css";

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${classes.link} ${classes.active}` : classes.link;

export const Layout = () => (
  <div className={classes.root}>
    <header className={classes.header}>
      <span className={classes.brand}>Portafolio</span>
      <nav className={classes.nav}>
        <NavLink to={appRoutes.home} end className={linkClassName}>
          Inicio
        </NavLink>
        <NavLink to={appRoutes.projects} className={linkClassName}>
          Proyectos
        </NavLink>
      </nav>
    </header>
    <main className={classes.main}>
      <Outlet />
    </main>
  </div>
);
