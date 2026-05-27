import { useEffect, useRef, useState } from "react";
import {
  User,
  Wrench,
  FolderGit2,
  Award,
  GraduationCap,
  Mail,
  FileText
} from "lucide-react";

const bottomNavItems = [
  { id: "about", name: "About", Icon: User },
  { id: "skills", name: "Skills", Icon: Wrench },
  { id: "projects", name: "Projects", Icon: FolderGit2 },
  { id: "certificates", name: "Awards", Icon: Award },
  { id: "education", name: "Edu", Icon: GraduationCap },
  { id: "contact", name: "Contact", Icon: Mail }
];

const cvLink =
  "/cv/Paboda_Sathsarani_CV.pdf";

export default function BottomNav() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const itemRefs = useRef({});

  useEffect(() => {
    const aboutSection = document.querySelector("#about");

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      {
        threshold: 0.12,
        rootMargin: "0px 0px -20% 0px"
      }
    );

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll("section, #hero"));
      let current = "hero";

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 220) {
          current = section.getAttribute("id") || current;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeItem = itemRefs.current[activeSection];

    if (activeItem?.scrollIntoView) {
      activeItem.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeSection]);

  const scrollTo = (event, id) => {
    event.preventDefault();
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`bottom-nav ${visible ? "bottom-nav-visible" : ""}`}
      aria-label="Mobile navigation"
    >
      <div className="bottom-nav-shell">
        <ul className="bottom-nav-list">
          {bottomNavItems.map(({ id, name, Icon }) => (
            <li className="bottom-nav-item" key={id}>
              <a
                ref={(node) => {
                  itemRefs.current[id] = node;
                }}
                href={`#${id}`}
                className={`bottom-nav-link ${activeSection === id ? "bottom-nav-link-active" : ""}`}
                onClick={(event) => scrollTo(event, id)}
                aria-label={name}
              >
                <Icon size={16} />
                <span>{name}</span>
              </a>
            </li>
          ))}

          <li className="bottom-nav-divider" aria-hidden="true"></li>

          <li className="bottom-nav-item">
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bottom-nav-cv"
              aria-label="Open CV"
            >
              <FileText size={16} />
              <span>CV</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}