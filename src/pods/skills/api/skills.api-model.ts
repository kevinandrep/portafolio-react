export type SkillCategoryApiModel = "frontend" | "tooling" | "backend";

export interface SkillApiModel {
  id: string;
  name: string;
  category: SkillCategoryApiModel;
  level: 1 | 2 | 3 | 4 | 5;
}
