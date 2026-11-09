import { useEffect, useState } from "react";
import { getSkills } from "./api/skills.api";
import { SkillsComponent } from "./skills.component";
import { mapSkillListFromApiToGroupsVm } from "./skills.mapper";
import type { SkillGroupVm } from "./skills.vm";

export const SkillsContainer = () => {
  const [groups, setGroups] = useState<SkillGroupVm[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    getSkills().then((data) => {
      if (!cancelled) {
        setGroups(mapSkillListFromApiToGroupsVm(data));
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!groups) {
    return <p>Cargando habilidades…</p>;
  }

  return <SkillsComponent groups={groups} />;
};
