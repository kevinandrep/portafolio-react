import type { SkillApiModel } from "./skills.api-model";

export const skillsData: SkillApiModel[] = [
  { id: "git", name: "Git", category: "tooling", level: 3 },
  { id: "react", name: "React", category: "frontend", level: 3 },
  { id: "prisma", name: "Prisma", category: "backend", level: 2 },
  { id: "typescript", name: "TypeScript", category: "frontend", level: 3 },
  {
    id: "github-actions",
    name: "GitHub Actions",
    category: "tooling",
    level: 2,
  },
  { id: "css-modules", name: "CSS Modules", category: "frontend", level: 3 },
  { id: "docker", name: "Docker", category: "tooling", level: 2 },
  { id: "nextjs", name: "Next.js", category: "frontend", level: 2 },
];
