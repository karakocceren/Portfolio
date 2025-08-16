import { useRef } from "react";
import { useOrbitAnimation } from "../../hooks/useOrbitAnimation";
import "./styles.css";

const orbitItems = ["Education", "Experience", "Projects", "Skills", "Contact"];

const OrbitSection = () => {
  const orbitContainerRef = useRef<HTMLDivElement>(null);
  const orbitingStyles = useOrbitAnimation(orbitContainerRef, orbitItems.length);

  const handleItemClick = () => {
    // No action for now
  };

  return (
    <div className="orbit-container" ref={orbitContainerRef}>
      <div className="orbit-center">
        Ceren Karakoç
        <br />
        Frontend Developer
      </div>

      {orbitItems.map((label, i) => (
        <div
          className="orbit-item"
          key={i}
          style={orbitingStyles[i]}
          onClick={handleItemClick}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default OrbitSection;
