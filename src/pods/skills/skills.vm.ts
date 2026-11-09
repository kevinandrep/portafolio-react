export interface SkillVm {
  id: string;
  name: string;
  level: number;
  levelLabel: string;
}

export interface SkillGroupVm {
  category: string;
  title: string;
  skills: SkillVm[];
}
