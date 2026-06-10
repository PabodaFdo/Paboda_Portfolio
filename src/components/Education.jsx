import { motion } from "motion/react";

const education = [
  {
    title: "BSc (Hons) Information Technology — Data Science",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2024 — Present",
    location: "Malabe, Sri Lanka",
    description:
      "Undergraduate degree focused on data science, machine learning, software development, and applied analytics. Building practical skills through academic projects, full-stack development, and data-driven systems.",
    badges: ["Data Science", "Machine Learning", "Software Development", "IEEE Member"]
  },
  {
    title: "G.C.E Advanced Level (A/L) — Physical Science Stream",
    institution: "Panadura Balika Maha Vidyalaya",
    period: "2020 — 2023",
    location: "Panadura, Sri Lanka",
    description:
      "Completed Advanced Level studies in the Physical Science stream, strengthening analytical thinking, mathematics-based reasoning, and problem-solving foundations.",
    badges: ["Physical Science", "Analytical Thinking", "Mathematics"]
  },
  {
    title: "G.C.E Ordinary Level (O/L)",
    institution: "Panadura Balika Maha Vidyalaya",
    period: "2018 — 2019",
    location: "Panadura, Sri Lanka",
    description:
      "Completed Ordinary Level education with a strong academic foundation that supported further studies in science, technology, and computing.",
    badges: ["Secondary Education", "Academic Foundation"]
  }
];

export default function Education() {
  return (
    <section id="education">
      <div style={{ marginBottom: "3rem" }} className="reveal">
        <div className="section-label">Education</div>

        <h2 className="section-title">
          Academic <span className="grad-text">Journey</span>
        </h2>
      </div>

      <div className="education-timeline">
        {education.map((item, index) => (
          <motion.article
            key={item.title}
            className="education-timeline-item"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          >
            <span className="education-marker"></span>

            <motion.div
              className="glass education-timeline-card motion-soft-glow reveal"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="education-card-top">
                <div>
                  <h3 className="education-title">{item.title}</h3>
                  <p className="education-institution">{item.institution}</p>
                </div>

                <span className="education-period">{item.period}</span>
              </div>

              <p className="education-location">{item.location}</p>
              <p className="education-description">{item.description}</p>

              <div className="education-badges">
                {item.badges.map((badge) => (
                  <span className="education-badge" key={badge}>
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}