import { createBrowserRouter } from "react-router";
import { Layout } from "../../common/layout";
import { HomeScene, ProjectsScene, SkillsScene } from "../../scenes";
import { appRoutes } from "./routes";

export const router = createBrowserRouter(
  [
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
        {
          path: appRoutes.skills,
          element: <SkillsScene />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
