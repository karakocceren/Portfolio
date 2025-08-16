import BackgroundBubbles from "./BackgroundBubbles";
import OrbitSection from "./OrbitSection";
import TextSection from "./TextSection";
import "./styles.css";

const Hero = () => {
  return (
    <section className="bubbled-background">
      <BackgroundBubbles />
      <div className="content-wrapper">
        <TextSection />
        <OrbitSection />
      </div>
    </section>
  );
}

export default Hero