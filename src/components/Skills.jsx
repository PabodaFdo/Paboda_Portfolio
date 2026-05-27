import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { skillsData } from "../data/skills";

function SkillCard({ title, Icon, color }) {
  return (
    <motion.div
      className="marquee-skill-card"
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.18 }}
    >
      <div className="marquee-skill-icon">
        <Icon style={{ color }} />
      </div>

      <span>{title}</span>
    </motion.div>
  );
}

function MarqueeRow({ skills, direction = "left" }) {
  const marqueeRef = useRef(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  useEffect(() => {
    const measureWidth = () => {
      if (marqueeRef.current) {
        setMarqueeWidth(marqueeRef.current.scrollWidth / 2);
      }
    };

    measureWidth();
    window.addEventListener("resize", measureWidth);

    return () => window.removeEventListener("resize", measureWidth);
  }, [skills]);

  const speedFactor = 48;
  const animationDuration = marqueeWidth > 0 ? marqueeWidth / speedFactor : 20;

  const animateX =
    direction === "right" ? [0, -marqueeWidth] : [-marqueeWidth, 0];

  return (
    <div className="marquee-row-wrap">
      <motion.div
        ref={marqueeRef}
        className="marquee-row"
        animate={marqueeWidth > 0 ? { x: animateX } : {}}
        transition={{
          repeat: Infinity,
          duration: animationDuration,
          ease: "linear",
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <SkillCard
            key={`${skill.title}-${index}`}
            title={skill.title}
            Icon={skill.Icon}
            color={skill.color}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills-marquee-section">
      <div className="skills-header reveal">
        <div className="section-label">Skills</div>

        <h2 className="section-title">
          My Technology <span className="grad-text">Toolkit</span>
        </h2>

        <p className="skills-marquee-subtitle">
          A quick view of the languages, frameworks, tools, and AI/data science
          technologies I use in my projects.
        </p>
      </div>

      <div className="skills-marquee-container reveal">
        {skillsData.map((category, index) => (
          <div className="skills-marquee-group" key={category.title}>
            <div className="skills-marquee-category">
              <span>{category.title}</span>
            </div>

            <MarqueeRow
              skills={category.data}
              direction={index % 2 === 0 ? "right" : "left"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}