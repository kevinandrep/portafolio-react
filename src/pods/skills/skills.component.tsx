import type { SkillGroupVm } from "./skills.vm";
import classes from "./skills.module.css";

interface Props {
  groups: SkillGroupVm[];
}

export const SkillsComponent = ({ groups }: Props) => (
  <div className={classes.groups}>
    {groups.map((group) => (
      <section key={group.category} className={classes.group}>
        <h2 className={classes.title}>{group.title}</h2>
        <ul className={classes.list}>
          {group.skills.map((skill) => (
            <li key={skill.id} className={classes.skill}>
              <span>{skill.name}</span>
              <span className={classes.level}>{skill.levelLabel}</span>
            </li>
          ))}
        </ul>
      </section>
    ))}
  </div>
);
