import { createBrowserRouter } from "react-router";
import { Layout } from "../../common/layout";
import { appRoutes } from "./routes";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: appRoutes.home,
        element: <h1>Inicio</h1>,
      },
      {
        path: appRoutes.projects,
        element: <h1>Proyectos</h1>,
      },
    ],
  },
]);
