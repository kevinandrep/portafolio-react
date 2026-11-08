import { createBrowserRouter } from "react-router";
import { appRoutes } from "./routes";

export const router = createBrowserRouter([
  {
    path: appRoutes.home,
    element: <h1>Inicio</h1>,
  },
  {
    path: appRoutes.projects,
    element: <h1>Proyectos</h1>,
  },
]);
