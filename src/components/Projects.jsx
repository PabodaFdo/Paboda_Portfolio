import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Image as ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../data/projects";

function ProjectImage({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const shouldShowPlaceholder = !project.image || imageFailed;

  return shouldShowPlaceholder ? (
    <div className="featured-project-placeholder">
      <ImageIcon size={34} />
      <span>Project Preview Coming Soon</span>
    </div>
  ) : (
    <img
      src={project.image}
      alt={`${project.title} preview`}
      className="featured-project-image"
      onError={() => setImageFailed(true)}
    />
  );
}

export default function Projects() {
  return (
    <section id="projects" className="featured-projects-section">
      <div className="projects-header reveal">
        <div className="section-label">Projects</div>

        <h2 className="section-title">
          Some Things I've <span className="grad-text">Built</span>
        </h2>
      </div>

      <div className="featured-projects-list">
        {projects.map((project, index) => {
          const reverse = index % 2 === 1;

          return (
            <motion.article
              key={project.id}
              className={`featured-project ${reverse ? "featured-project-reverse" : ""}`}
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{
                duration: 0.55,
                delay: Math.min(index * 0.08, 0.35)
              }}
              whileHover={{ y: -6 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-project-image-link"
              >
                <div className="featured-project-image-wrap">
                  <ProjectImage project={project} />
                </div>
              </a>

              <div className="featured-project-content">
                <p className="featured-project-label">Featured Project</p>

                <h3 className="featured-project-title">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>

                <div className="featured-project-description glass">
                  <p>{project.description}</p>
                </div>

                <ul className="featured-project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className="featured-project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href={project.liveDemo || project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={project.liveDemo ? "View Live" : "View Repository"}
                    aria-label={project.liveDemo ? `${project.title} live demo` : `${project.title} open repository`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}