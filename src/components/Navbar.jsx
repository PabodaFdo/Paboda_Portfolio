import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun, Sparkles, X } from "lucide-react";
import psLogo from "../assets/ps-logo-256.png";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#certificates" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

const cvLink =
  "/cv/Paboda_Sathsarani_CV.pdf";

export default function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("portfolio-theme") || "light"
  );
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [showThemeHint, setShowThemeHint] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

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
    const seen = localStorage.getItem("theme-hint-seen");

    if (!seen) {
      const timeout = window.setTimeout(() => {
        setShowThemeHint(true);
        localStorage.setItem("theme-hint-seen", "true");
      }, 1400);

      return () => window.clearTimeout(timeout);
    }

    return undefined;
  }, []);

  const scrollTo = (event, href) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const closeThemeHint = () => setShowThemeHint(false);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
    setShowThemeHint(false);
  };

  return (
    <motion.header
      className={`animated-navbar ${scrolled ? "nav-scrolled" : ""}`}
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="nav-inner">
        <a
          href="#hero"
          className="nav-logo-box"
          onClick={(event) => scrollTo(event, "#hero")}
          aria-label="Scroll to hero section"
        >
          <img
            src={psLogo}
            alt="PS Portfolio Logo"
            className="nav-logo-image"
          />
        </a>

        <div className="nav-desktop">
          <ul className="nav-numbered-list">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.45, ease: "easeOut" }}
              >
                <a
                  href={item.href}
                  className={activeSection === item.href.slice(1) ? "active" : ""}
                  onClick={(event) => scrollTo(event, item.href)}
                >
                  <span className="nav-name">{item.name}</span>
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cv-btn"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.74, duration: 0.45, ease: "easeOut" }}
          >
            CV
          </motion.a>

          <div className="nav-theme-wrap">
            <button
              type="button"
              className="nav-icon-toggle"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <AnimatePresence>
              {showThemeHint && (
                <motion.div
                  className="nav-theme-hint"
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <Sparkles size={14} />
                  <span>{theme === "dark" ? "Try light mode" : "Try dark mode"}</span>
                  <button
                    type="button"
                    className="nav-theme-hint-close"
                    aria-label="Dismiss theme hint"
                    onClick={closeThemeHint}
                  >
                    <X size={12} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="nav-mobile-top">
          <div className="nav-theme-wrap">
            <button
              type="button"
              className="nav-icon-toggle"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <AnimatePresence>
              {showThemeHint && (
                <motion.div
                  className="nav-theme-hint"
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <Sparkles size={14} />
                  <span>{theme === "dark" ? "Try light mode" : "Try dark mode"}</span>
                  <button
                    type="button"
                    className="nav-theme-hint-close"
                    aria-label="Dismiss theme hint"
                    onClick={closeThemeHint}
                  >
                    <X size={12} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
}