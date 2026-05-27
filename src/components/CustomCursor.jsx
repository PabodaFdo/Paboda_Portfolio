import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const animationRef = useRef(0);

  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [viewMode, setViewMode] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouchDevice || prefersReducedMotion || window.innerWidth <= 900) {
      return undefined;
    }

    const moveCursor = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }

      setVisible(true);
    };

    const animateRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.18;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }

      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }

      animationRef.current = window.requestAnimationFrame(animateRing);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const addActive = () => setActive(true);
    const removeActive = () => {
      setActive(false);
      setViewMode(false);
    };

    const addView = () => {
      setActive(true);
      setViewMode(true);
    };

    const removeView = () => {
      setActive(false);
      setViewMode(false);
    };

    const hoverTargets = document.querySelectorAll(
      "a, button, .featured-project, .featured-project-image-link, .certificate-card, .nav-logo-box, .bottom-nav-link, .bottom-nav-cv, .footer-links a, .footer-social-modern a"
    );

    const viewTargets = document.querySelectorAll(
      ".featured-project-image-link, .featured-project-image-wrap, .certificate-image-wrap"
    );

    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", addActive);
      target.addEventListener("mouseleave", removeActive);
    });

    viewTargets.forEach((target) => {
      target.addEventListener("mouseenter", addView);
      target.addEventListener("mouseleave", removeView);
    });

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    animationRef.current = window.requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.cancelAnimationFrame(animationRef.current);

      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", addActive);
        target.removeEventListener("mouseleave", removeActive);
      });

      viewTargets.forEach((target) => {
        target.removeEventListener("mouseenter", addView);
        target.removeEventListener("mouseleave", removeView);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${visible ? "cursor-visible" : ""}`}
      />

      <div
        ref={ringRef}
        className={`custom-cursor-ring ${visible ? "cursor-visible" : ""} ${
          active ? "cursor-active" : ""
        } ${viewMode ? "cursor-view-mode" : ""}`}
      />

      <div
        ref={labelRef}
        className={`custom-cursor-label ${
          visible && viewMode ? "cursor-visible" : ""
        }`}
      >
        View
      </div>
    </>
  );
}