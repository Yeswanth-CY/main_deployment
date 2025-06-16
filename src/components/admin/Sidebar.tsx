import React, { useEffect, useState } from "react";
import styles from "@/styles/admin/Sidebar.module.css";
import { useRouter } from "next/router";
import {
  FaUser, FaUsers, FaBriefcase, FaClipboardList,
  FaShieldAlt, FaCog, FaSignOutAlt
} from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { HiOutlineChartBar } from "react-icons/hi";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [profilePicture, setProfilePicture] = useState("/images/Profile.png");

  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        if (!token) return;

        const response = await fetch("http://localhost:5000/admin/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        console.log("🟢 Admin Data Fetched:", data);

        if (data.profilePicture) {
          setProfilePicture(`http://localhost:5000${data.profilePicture}?t=${new Date().getTime()}`);
        }
      } catch (error) {
        console.error("❌ Error fetching admin data:", error);
      }
    };

    fetchAdminProfile();
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    await router.push("/");
    window.location.reload();
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <img src={profilePicture} alt="Profile" onError={() => setProfilePicture("/images/Profile.png")} />
      </div>

      <nav className={styles.nav}>
        <ul>
          <li onClick={() => router.push("/admin/personalinfo")}>
            <FaUser className={styles.icon} />
            <span>Personal Info</span>
          </li>
          <li onClick={() => router.push("https://v0-ai-dashboard-beta.vercel.app/")}>
            <FaUsers className={styles.icon} />
            <span>Student Management</span>
          </li>
          <li onClick={() => router.push("/company-management")}>
            <FaBriefcase className={styles.icon} />
            <span>Company Management</span>
          </li>
          <li onClick={() => router.push("https://v0-new-project-wine-psi.vercel.app/admin")}>
            <MdLibraryBooks className={styles.icon} />
            <span>Upload Courses</span>
          </li>
          <li onClick={() => router.push("https://v0-student-recruiter-matching-one.vercel.app/analytics")}>
            <HiOutlineChartBar className={styles.icon} />
            <span>Analytics Insights</span>
          </li>
          <li onClick={() => router.push("https://v0-student-recruiter-matching-one.vercel.app/management")}>
            <FaClipboardList className={styles.icon} />
            <span>Custom Quiz Upload</span>
          </li>
          <li onClick={() => router.push("/security-logs")}>
            <FaShieldAlt className={styles.icon} />
            <span>Security & Compliance Logs</span>
          </li>
          <li onClick={() => router.push("/settings")}>
            <FaCog className={styles.icon} />
            <span>Settings</span>
          </li>
        </ul>
      </nav>

      <div className={styles.logout} onClick={handleLogout}>
        <FaSignOutAlt className={styles.icon} />
        <span>Logout</span>
      </div>
    </aside>
  );
};

export default Sidebar;
