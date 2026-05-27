import { motion } from "motion/react";

const learningItems = [
  {
    badge: "Machine Learning",
    title: "Model Building, Evaluation, and Improvement",
    description:
      "Building stronger habits around feature engineering, model comparison, validation, and practical tuning so my models become more reliable and easier to integrate."
  },
  {
    badge: "Predictive Analytics",
    title: "Finding Patterns and Supporting Decisions",
    description:
      "Improving how I use data to identify trends, highlight risk, and communicate useful insights that support decision-making in realistic applications."
  },
  {
    badge: "Full-Stack AI",
    title: "Connecting Models with Real Applications",
    description:
      "Practising how to connect trained models with APIs, frontends, and dashboards so AI features feel useful inside complete user workflows."
  },
  {
    badge: "Data Visualization",
    title: "Presenting Insights Clearly",
    description:
      "Working on cleaner charts, clearer storytelling, and better dashboard layouts so results are easier to understand for technical and non-technical users."
  }
];

export default function Learning() {
  return (
    <section id="learning">
      <div className="projects-header reveal">
        <div className="section-label">Currently Learning</div>

        <h2 className="section-title">
          What I’m <span className="grad-text">Improving</span> Next
        </h2>
      </div>

      <div className="learning-grid">
        {learningItems.map((item, index) => (
          <motion.article
            className="glass learning-card motion-soft-glow reveal"
            key={item.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
              delay: index * 0.07
            }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <div className={index === 0 ? "project-type-badge ai" : "project-type-badge"}>
              {item.badge}
            </div>

            <h3 className="learning-title">{item.title}</h3>
            <p className="learning-copy">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}