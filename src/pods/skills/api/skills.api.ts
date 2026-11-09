import type { SkillApiModel } from "./skills.api-model";
import { skillsData } from "./skills.data";

export const getSkills = (): Promise<SkillApiModel[]> =>
  Promise.resolve(skillsData);
