import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "motion/react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const roles = [
  "Data Science Undergraduate",
  "ML Model Builder",
  "Predictive Analytics Developer",
  "Full-Stack AI System Builder"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const handleSplineLoad = (spline) => {
    spline?._renderer?.pipeline?.setWatermark?.(null);
  };

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === currentRole.length) {
            setDeleting(true);
          }
        } else {
          setCharIndex((prev) => prev - 1);

          if (charIndex - 1 === 0) {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      deleting ? 38 : charIndex === currentRole.length ? 1700 : 65
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <div id="hero">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <div className="hero-inner">
        <div>
          <motion.div
            className="hero-eyebrow reveal"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          >
            <div className="hero-dot"></div>
            Open to Data Science, AI/ML, and Software Engineering Internships
          </motion.div>

          <motion.h1
            className="hero-name reveal"
            initial={{ opacity: 0, y: 20, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
          >
            W. Paboda
            <br />
            <span className="grad-text">Sathsarani</span>
            <br />
            Fernando
          </motion.h1>

          <motion.div
            className="hero-typed-row reveal"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.26 }}
          >
            <span>{roles[roleIndex].slice(0, charIndex)}</span>
            <span className="typed-cursor"></span>
          </motion.div>

          <motion.p
            className="hero-tagline reveal"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.38 }}
          >
            Turning data, code, and ideas into intelligent solutions — through
            machine learning, predictive analytics, and full-stack data-driven
            applications.
          </motion.p>

          <motion.div
            className="hero-cta reveal"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.58 }}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore My Work ↓
            </motion.a>

            <motion.a
              href="/cv/Paboda_Sathsarani_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.66 }}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV ↗
            </motion.a>
          </motion.div>
        </div>

        <div className="hero-visual reveal" style={{ transitionDelay: ".2s" }}>
          <div className="orbit orbit1">
            <div className="orbit-dot"></div>
            <div className="orbit-dot orbit-dot2"></div>
          </div>

          <div className="orbit orbit2"></div>

          <div className="hero-avatar hero-robot-avatar">
            <div className="hero-robot-wrap">
              <Suspense
                fallback={<div className="hero-robot-loading">Loading 3D...</div>}
              >
                <Spline
                  scene="https://prod.spline.design/5NFAzqFnv-RigPv1/scene.splinecode"
                  onLoad={handleSplineLoad}
                />
              </Suspense>
            </div>
          </div>

          <div className="data-chip chip1">🤖 AI / ML</div>
          <div className="data-chip chip2">📊 Predictive Analytics</div>
          <div className="data-chip chip3">⚡ Full Stack Systems</div>
        </div>
      </div>
    </div>
  );
}