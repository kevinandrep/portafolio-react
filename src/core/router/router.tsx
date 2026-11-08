import { createBrowserRouter } from "react-router";
import { Layout } from "../../common/layout";
import { HomeScene, ProjectsScene } from "../../scenes";
import { appRoutes } from "./routes";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: appRoutes.home,
        element: <HomeScene />,
      },
      {
        path: appRoutes.projects,
        element: <ProjectsScene />,
      },
    ],
  },
]);
