import type {
  SkillApiModel,
  SkillCategoryApiModel,
} from "./api/skills.api-model";
import type { SkillGroupVm, SkillVm } from "./skills.vm";

const categoryTitles: Record<SkillCategoryApiModel, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tooling: "Herramientas",
};

const categoryOrder: SkillCategoryApiModel[] = [
  "frontend",
  "backend",
  "tooling",
];

const mapLevelToLabel = (level: SkillApiModel["level"]): string => {
  if (level >= 4) return "Avanzado";
  if (level === 3) return "Intermedio";
  return "Básico";
};

export const mapSkillFromApiToVm = (skill: SkillApiModel): SkillVm => ({
  id: skill.id,
  name: skill.name,
  level: skill.level,
  levelLabel: mapLevelToLabel(skill.level),
});

export const mapSkillListFromApiToGroupsVm = (
  skills: SkillApiModel[],
): SkillGroupVm[] =>
  categoryOrder
    .map((category) => ({
      category,
      title: categoryTitles[category],
      skills: skills
        .filter((skill) => skill.category === category)
        .sort((a, b) => b.level - a.level || a.name.localeCompare(b.name))
        .map(mapSkillFromApiToVm),
    }))
    .filter((group) => group.skills.length > 0);
