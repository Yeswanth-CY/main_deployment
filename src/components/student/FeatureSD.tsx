import React from "react";
import styles from "@/styles/student/FeatureSD.module.css";
import { 
  FaCogs, FaCheckCircle, FaBookOpen, FaCode, 
  FaMicrophoneAlt, FaMapSigns, FaChartPie 
} from "react-icons/fa";
import { useRouter } from "next/router";

const FeatureSD: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (title: string) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to access this feature.");
      return;
    }

    if (title === "Skills") {
      router.push("/student/skill");
    } else if (title === "Skill Assessment") {
      window.location.href = "https://v0-gamified-quiz-app-livid.vercel.app/";
    } else if (title === "Coding Challenge") {
      window.location.href = "https://v0-next-js-coding-platform-dun.vercel.app/";
    } else if (title === "Roadmap Generation") {
      window.location.href = "https://v0-new-project-srg6ehkl2tq.vercel.app/";
    } else if (title === "Analytical Dasboard") {
      window.location.href = "https://v0-ai-dashboard-sooty.vercel.app/";
    } else if (title === "Mock Interview") {
      window.location.href = "https://v0-mock-interview-app-pi.vercel.app/";
    } else if (title === "Courses") {
      window.location.href = "https://v0-new-project-wine-psi.vercel.app/";
    }
  };

  const features = [
    { icon: <FaCogs size={35} color="#FF6347" />, title: "Skills", desc: "Manage skills" },
    { icon: <FaCheckCircle size={35} color="#32CD32" />, title: "Skill Assessment", desc: "Take a test" },
    { icon: <FaBookOpen size={35} color="#7B68EE" />, title: "Courses", desc: "Learn a Course" },
    { icon: <FaCode size={35} color="#20B2AA" />, title: "Coding Challenge", desc: "Take a challenge" },
    { icon: <FaMicrophoneAlt size={35} color="#FF8C00" />, title: "Mock Interview", desc: "Take a Mock" },
    { icon: <FaMapSigns size={35} color="#EE93BE" />, title: "Roadmap Generation", desc: "Generate now" },
    { icon: <FaChartPie size={35} color="#F68C1F" />, title: "Analytical Dasboard", desc: "Check now" }
  ];

  return (
    <div className={styles.featureContainer}>
      {features.map((feature, index) => (
        <div
          key={index}
          className={styles.card}
          onClick={() => handleNavigation(feature.title)}
          style={{
            cursor: "pointer"
          }}
          aria-label={`Feature: ${feature.title}`}
        >
          <div className={styles.icon}>{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureSD;
