import React from "react";
import Link from "next/link";
import styles from "@/styles/admin/FeatureAD.module.css";

// Import updated icons from react-icons
import { FaUserGraduate } from "react-icons/fa";
import { MdLibraryBooks, MdWork } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";

const FeatureCard: React.FC = () => {
  const features = [
    { 
      icon: <FaUserGraduate size={40} color="#EE93BE" />, 
      title: "Total count", 
      desc: "Students, Companies, Placements",
      link: "https://v0-student-recruiter-matching.vercel.app/"
    },
    { 
      icon: <MdLibraryBooks size={40} color="#FFA07A" />, 
      title: "Courses", 
      desc: "upload a Course",
      link: "https://v0-new-project-wine-psi.vercel.app/admin"
    },
    { 
      icon: <MdWork size={40} color="#7FFFD4" />, 
      title: "Active vacancies", 
      desc: "26",
      link: "https://v0-student-recruiter-matching.vercel.app/recruiters"
    },
    { 
      icon: <GiNotebook size={40} color="#ADD8E6" />, 
      title: "custom question-quiz", 
      desc: "upload questions",
      link: "https://v0-student-recruiter-matching-one.vercel.app/management"
    }
  ];

  return (
    <div className={styles.featureContainer}>
      {features.map((feature, index) => (
        <Link href={feature.link} key={index} className={styles.cardLink}>
          <div className={styles.card}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeatureCard;
