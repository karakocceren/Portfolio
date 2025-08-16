import "./styles.css";

type SkillListProps = {
  skills: string[];
}

export default function SkillList({ skills }: SkillListProps) {
  return (
    <div className="skills-grid">
      {skills.map((skill) => (
        <div key={skill} className="skill-chip">
          {skill}
        </div>
      ))}
    </div>
  );
}
