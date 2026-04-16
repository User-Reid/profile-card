import type { skillsType } from "../App";

export default function Skill({ skillName, skillColor }: skillsType) {
  return (
    <p className="skill" style={{ backgroundColor: skillColor }}>
      {skillName}
    </p>
  );
}
