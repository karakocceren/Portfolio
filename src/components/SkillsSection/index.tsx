import { useState } from "react";
import type { SkillCategory } from "./types";
import SkillsTabs from "./SkillsTabs";
import SkillList from "./SkillList";
import "./styles.css";

const skillsData: Record<SkillCategory, string[]> = {
  "Languages": ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  "Frameworks & Libraries": ["React (with Vite)", "Redux Toolkit", "RTK Query", "React Hook Form", "Zod"],
  "UI Libraries": ["Material UI", "Ant Design"],
  "Tools & Platforms": ["Git", "GitHub", "npm", "yarn", "Vercel", "Axios", "ESLint", "Prettier"],
  "Development Practices": ["Responsive Design", "Component-Based Architecture", "API Integration", "Localization (i18n)"]
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("Languages");

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-layout">
        <SkillsTabs
          tabs={Object.keys(skillsData) as SkillCategory[]}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />
        <SkillList skills={skillsData[activeTab]} />
      </div>
    </section>
  );
}
