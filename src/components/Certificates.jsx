import { motion } from "motion/react";
import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="projects-header reveal">
        <div className="section-label">Achievements</div>

        <h2 className="section-title">
          Achievements & <span className="grad-text">Certifications</span>
        </h2>

        <p className="certificates-subtitle">
          Academic achievements and certifications that reflect my learning
          journey, consistency, and continuous skill development in data
          science, web development, and technology.
        </p>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <motion.article
            className={`glass certificate-card motion-soft-glow reveal ${
              certificate.type === "Academic Achievement"
                ? "achievement-card"
                : ""
            }`}
            key={certificate.id}
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
            <div className="certificate-image-wrap">
              <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                className="certificate-image"
              />
            </div>

            <div className="certificate-content">
              <div className="certificate-top-row">
                <span className="certificate-type">{certificate.type}</span>
                <span className="certificate-date">{certificate.date}</span>
              </div>

              <h3 className="certificate-title">{certificate.title}</h3>

              <p className="certificate-issuer">{certificate.issuer}</p>

              <p className="certificate-description">
                {certificate.description}
              </p>

              <div className="certificate-tags">
                {certificate.highlights.map((tag) => (
                  <span className="certificate-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {certificate.link !== "#" && (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm certificate-btn"
                >
                  View Certificate ↗
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}