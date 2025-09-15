import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      if (res.data) {
        alert("Login successful! Redirecting...");
        navigate("/home");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>Lost & Found</div>
        <nav style={styles.nav}>
          <Link to="/home" style={styles.navLink}>Home</Link>
        </nav>
      </header>

      {/* Login Form */}
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.title}>Login</h2>
          {error && <p style={styles.error}>{error}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Login</button>
          <p style={styles.bottomText}>
            Don't have an account? 
            <Link to="/signup" style={styles.bottomLink}>Sign Up</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;




const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5", 
    padding: "1rem",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    padding: "1rem 2rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 999,
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "white",
  },
  nav: {
    display: "flex",
    gap: "1rem",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    fontWeight: "700",
    fontSize: "1.5rem",
  },

  form: {
    backgroundColor: "#fff",
    padding: "3rem 3.5rem",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "480px",
    boxSizing: "border-box",
    textAlign: "center",
  },
  title: {
    marginBottom: "2.5rem",
    fontSize: "2rem",
    fontWeight: "700",
    color: "#222",
  },
  input: {
    width: "90%",
    padding: "0.9rem 1rem",
    marginBottom: "1.2rem",
    border: "1.5px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    transition: "border-color 0.3s",
  },
  button: {
    width: "100%",
    padding: "1rem",
    backgroundColor: "#9b59b6", // light purple button color
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  error: {
    color: "#d32f2f",
    marginBottom: "1rem",
    fontWeight: "600",
  },
  bottomText: {
    marginTop: "1.8rem",
    fontSize: "0.95rem",
    color: "#555",
  },
  bottomLink: {
    marginLeft: "6px",
    color: "#9b59b6",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "none",
  }
};
