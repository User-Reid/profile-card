import ProfilePic from "./Components/ProfilePic";
import Description from "./Components/Description";
import Skill from "./Components/Skill";

import "./App.css";

export type skillsType = {
  skillName: string;
  skillColor: string;
};

export default function App() {
  const skills: skillsType[] = [
    { skillName: "React", skillColor: "cyan" },
    { skillName: "HTML", skillColor: "orange" },
    { skillName: "CSS", skillColor: "blue" },
  ];

  return (
    <body className="card">
      <ProfilePic />
      <div className="data">
        <h1>Reid Herrera</h1>
        <Description />
        <div className="skill-list">
          {skills.map((x) => (
            <Skill key={x.skillName} {...x} />
          ))}
        </div>
      </div>
    </body>
  );
}
