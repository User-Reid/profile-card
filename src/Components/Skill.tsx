import type { skillsType } from "../App";

export default function Skill({ skillName, skillColor, emoji }: skillsType) {
  return (
    <p className="skill" style={{ backgroundColor: skillColor }}>
      {skillName}
    </p>
  );
}
