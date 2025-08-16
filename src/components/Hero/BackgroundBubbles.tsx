import "./styles.css";

const BackgroundBubbles = () => {
  const bubbles = Array.from({ length: 20 });

  return (
    <div className="background-bubbles">
      {bubbles.map((_, i) => {
        const size = 20 + Math.random() * 80; // 20px – 100px
        const duration = 10 + Math.random() * 12;
        const delay = -(Math.random() * duration);
        const left = Math.random() * 100;

        return (
          <span
            key={i}
            className="bubble"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity: 0.15 + Math.random() * 0.3,
            }}
          />
        );
      })}
    </div>
  );
}

export default BackgroundBubbles