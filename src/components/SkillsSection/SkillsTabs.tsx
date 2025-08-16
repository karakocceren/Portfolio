import type { SkillCategory } from "./types";
import "./styles.css";

type SkillsTabsProps = {
  tabs: SkillCategory[];
  activeTab: SkillCategory;
  onTabClick: (tab: SkillCategory) => void;
}

export default function SkillsTabs({ tabs, activeTab, onTabClick }: SkillsTabsProps) {
  return (
    <div className="skills-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? "active" : ""}`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
