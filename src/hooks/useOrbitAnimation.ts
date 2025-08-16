import { useState, useEffect, useRef, type RefObject } from "react";

export type OrbitingItemStyles = React.CSSProperties[];

export const useOrbitAnimation = (
  containerRef: RefObject<HTMLElement | null>,
  itemCount: number,
  speed = 0.002
) => {
  const [styles, setStyles] = useState<OrbitingItemStyles>([]);
  const angleRef = useRef(0);
  const animationFrameId = useRef<number | undefined>(undefined);

  useEffect(() => {
    const orbitContainer = containerRef.current;
    if (!orbitContainer || itemCount === 0) return;

    const getRadius = () => {
      const containerSize = orbitContainer.offsetWidth;
      const itemSize = containerSize * 0.15;
      const responsiveGap = containerSize * 0.05;
      return containerSize / 2 - itemSize / 2 - responsiveGap;
    };

    const animate = () => {
      const radius = getRadius();
      const newStyles: OrbitingItemStyles = [];
      angleRef.current += speed;

      for (let i = 0; i < itemCount; i++) {
        const angle = angleRef.current + (i * (2 * Math.PI / itemCount));
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        newStyles.push({
          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        });
      }

      setStyles(newStyles);
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    const handleViewportChange = () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      animate();
    };

    window.addEventListener("resize", handleViewportChange);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleViewportChange);
    }

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("resize", handleViewportChange);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleViewportChange);
      }
    };
  }, [containerRef, itemCount, speed]);

  return styles;
};
