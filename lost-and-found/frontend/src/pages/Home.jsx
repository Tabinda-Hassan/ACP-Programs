import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaBolt, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import gifDemo from "../assets/Robot.png";
import heroBackground from "../assets/HomePage.jpg";

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>Lost & Found</div>
        <nav style={styles.nav}>
          <Link to="/login" style={styles.navLink}>Login</Link>
          <Link to="/signup" style={styles.navLink}>Sign Up</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroInner}>
          <motion.div
            style={styles.heroLeft}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={gifDemo}
              alt="Lost and Found Demo"
              style={{
                width: "100%",
                maxWidth: "900px",
                borderRadius: "50%",
                objectFit: "cover",
                aspectRatio: "1 / 1",
              }}
            />
          </motion.div>

          <motion.div
            style={styles.heroRight}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 style={styles.heroTitle}>Lost & Found</h1>
            <p style={styles.heroDesc}>
              A secure platform to report and recover lost items within your university.
            </p>
            <div style={styles.buttonGroup}>
              <Link to="/report-lost" style={{ textDecoration: "none" }}>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={styles.ctaButton}>
                  Report Lost Items
                </motion.button>
              </Link>
              <Link to="/found-items" style={{ textDecoration: "none" }}>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={styles.ctaButton}>
                  Found Items
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Why Use Our Platform?</h2>
          <div style={styles.featuresContainer}>
            <motion.div
              style={styles.featureCard}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaShieldAlt size={40} style={styles.icon} />
              <h3>Secure</h3>
              <p>All your data is protected and confidential.</p>
            </motion.div>

            <motion.div
              style={styles.featureCard}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaBolt size={40} style={styles.icon} />
              <h3>Fast</h3>
              <p>Quick item reporting and real-time notifications.</p>
            </motion.div>

            <motion.div
              style={styles.featureCard}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaCheckCircle size={40} style={styles.icon} />
              <h3>Verified</h3>
              <p>Posts are verified by university staff and admins.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section style={{ ...styles.section, backgroundColor: "#f5f5f5", padding: "5rem 1rem", marginBottom: "6rem" }}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>How It Works</h2>
          <div style={styles.stepsContainer}>
            <div style={styles.stepBox}>
              <h4 style={styles.stepTitle}>Step 1: Check Listings</h4>
              <p style={styles.stepDesc}>Visit the 'Found Items' page to check if your lost item is already reported.</p>
            </div>
            <div style={styles.stepBox}>
              <h4 style={styles.stepTitle}>Step 2: Fill the Lost Item Form</h4>
              <p style={styles.stepDesc}>If not listed, fill out the 'Report Lost Item' form with accurate details.</p>
            </div>
            <div style={styles.stepBox}>
              <h4 style={styles.stepTitle}>Step 3: Admins Review</h4>
              <p style={styles.stepDesc}>Our admins verify submissions and keep an eye on matching items.</p>
            </div>
            <div style={styles.stepBox}>
              <h4 style={styles.stepTitle}>Step 4: Get Notified</h4>
              <p style={styles.stepDesc}>Once your item is found or matched, you'll receive an email notification immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p>© 2025 Lost & Found</p>
          <p style={{ fontSize: "0.85rem", color: "#aaa" }}>A University Smart Project | Made with ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#000",
    backgroundColor: "#fff",
    width: "100%",
    overflowX: "hidden",
    boxSizing: "border-box",
  },
  header: {
    width: "100%",
    backgroundColor: "#000",
    color: "#fff",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxSizing: "border-box",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1rem",
  },
  heroSection: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heroInner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
    padding: "2rem",
    gap: "3rem",
    flexWrap: "wrap",
  },
  heroLeft: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  heroRight: {
    flex: 1,
    padding: "2rem",
    textAlign: "center",
    zIndex: 2,
  },
  heroTitle: {
    fontSize: "4.5rem",
    marginBottom: "1rem",
  },
  heroDesc: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
    color: "#333",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
  },
  ctaButton: {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "0.9rem 2rem",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
  section: {
    padding: "5rem 1rem",
    textAlign: "center",
  },
  sectionContent: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "3rem",
  },
  featuresContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
  },
  featureCard: {
    backgroundColor: "#D7BDE2",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    width: "280px",
    textAlign: "center",
  },
  icon: {
    marginBottom: "1rem",
    color: "#000",
  },
  stepsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },
  stepBox: {
    backgroundColor: "#F0CCE5",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  stepTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  stepDesc: {
    fontSize: "1rem",
    color: "#444",
  },
  footer: {
    backgroundColor: "#111",
    color: "#eee",
    padding: "2rem 1rem",
    textAlign: "center",
  },
  footerContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
};
