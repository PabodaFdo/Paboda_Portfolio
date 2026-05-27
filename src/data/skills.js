import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa6";

import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiIntellijidea,
  SiPostman,
  SiR,
  SiScikitlearn,
  SiSpringboot,
  SiVite,
} from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb";
import { BsDatabaseFillGear } from "react-icons/bs";
import { MdApi, MdOutlineAnalytics } from "react-icons/md";
import { GiArtificialIntelligence, GiBrain } from "react-icons/gi";
import { VscVscode } from "react-icons/vsc";
import { PiChartLineUpBold } from "react-icons/pi";

export const skillsData = [
  {
    title: "Languages",
    data: [
      { title: "Java", Icon: FaJava, color: "#ED8B00" },
      { title: "Python", Icon: FaPython, color: "#3776AB" },
      { title: "R", Icon: SiR, color: "#276DC3" },
      { title: "SQL", Icon: BsDatabaseFillGear, color: "#4169E1" },
      { title: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { title: "HTML5", Icon: FaHtml5, color: "#E34F26" },
      { title: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    data: [
      { title: "React", Icon: FaReact, color: "#61DAFB" },
      { title: "React Native", Icon: TbBrandReactNative, color: "#61DAFB" },
      { title: "Node.js", Icon: SiNodedotjs, color: "#339933" },

      // Dark icons are used here so they are visible in light mode.
      { title: "Express.js", Icon: SiExpress, color: "#111827" },
      { title: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },

      { title: "REST API", Icon: MdApi, color: "#4169E1" },
    ],
  },
  {
    title: "AI & Data Science",
    data: [
      { title: "Scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
      { title: "XGBoost", Icon: GiBrain, color: "#FF6600" },
      { title: "Pandas", Icon: MdOutlineAnalytics, color: "#150458" },
      { title: "NumPy", Icon: PiChartLineUpBold, color: "#013243" },
      {
        title: "Predictive Analytics",
        Icon: GiArtificialIntelligence,
        color: "#4169E1",
      },
      {
        title: "Data Visualization",
        Icon: PiChartLineUpBold,
        color: "#0284C7",
      },
    ],
  },
  {
    title: "Databases & Tools",
    data: [
      { title: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { title: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { title: "Git", Icon: FaGitAlt, color: "#F05032" },

      // Dark icon is used here so it is visible in light mode.
      { title: "GitHub", Icon: FaGithub, color: "#111827" },

      { title: "IntelliJ IDEA", Icon: SiIntellijidea, color: "#FE315D" },
      { title: "VS Code", Icon: VscVscode, color: "#007ACC" },
      { title: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { title: "Vite", Icon: SiVite, color: "#646CFF" },
    ],
  },
];