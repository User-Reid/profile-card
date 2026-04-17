import type { skillsType } from "../App";
import Skill from "./Skill";

export default function SkillList() {
  const skills: skillsType[] = [
    { skillName: "React", skillColor: "cyan", emoji: "🌐" },
    { skillName: "HTML", skillColor: "orange", emoji: "🛠️" },
    { skillName: "Javascript", skillColor: "yellow", emoji: "🧠" },
    { skillName: "CSS", skillColor: "blue", emoji: "🎨" },
    { skillName: "C#", skillColor: "purple", emoji: "©️" },
    { skillName: "ASP.NET", skillColor: "grey", emoji: "🛜" },
    { skillName: "Rust", skillColor: "red", emoji: "🦀" },
    { skillName: "Typescript", skillColor: "white", emoji: "⛑️" },
  ];

  return (
    <div className="skill-list">
      {skills.map((x) => (
        <Skill key={x.skillName} {...x} />
      ))}
    </div>
  );
}
