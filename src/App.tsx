import ProfilePic from "./Components/ProfilePic";
import Description from "./Components/Description";
import SkillList from "./Components/SkillList";

import "./App.css";

export type skillsType = {
  skillName: string;
  skillColor: string;
  emoji: string;
};

export default function App() {
  return (
    <body className="card">
      <ProfilePic />
      <div className="data">
        <Description />
        <SkillList />
      </div>
    </body>
  );
}
