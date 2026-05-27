import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => observer.observe(element));

    document.querySelectorAll("#hero .reveal").forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("visible");
      }, index * 130 + 80);
    });

    return () => observer.disconnect();
  }, []);
}