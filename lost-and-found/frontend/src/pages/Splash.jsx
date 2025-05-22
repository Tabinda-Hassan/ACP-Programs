import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <img src={logo} alt="Logo" style={styles.logo} />
      <h2 style={styles.tagline}>Welcome to Lost & Found</h2>
      <div style={styles.loadingBarContainer}>
          <div style={styles.loadingBar}></div>
  </div>
      </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg,rgb(219, 230, 240),rgb(227, 238, 240))",
  },
  logo: {
    width: "300px",
    height: "300px",
    opacity: 0,
    animation: "fadeIn 1.5s ease forwards",
  },
  tagline: {
    marginTop: "1rem",
    fontSize: "1.5rem",
    color: "#333",
    opacity: 0,
    animation: "fadeIn 1s ease forwards",
    animationDelay: "1.3s",
  },
  loadingBarContainer: {
    marginTop: "2rem",
    width: "300px",
    height: "8px",
    backgroundColor: "#ddd",
    borderRadius: "4px",
    overflow: "hidden",
    opacity: 0,
    animation: "fadeIn 1s ease forwards",
    animationDelay: "3s", 
  },
  loadingBar: {
    height: "100%",
    width: "0%",
    backgroundColor: "#333",
    animation: "loadingBarFill 1.3s linear forwards",
    animationDelay: "3.6s", 
  },

};

export default Splash;
