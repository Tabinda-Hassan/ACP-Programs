import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
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
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      if (res.data) {
        alert("Signup successful! Redirecting to login...");
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed.");
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

      {/* SignUp Form */}
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.title}>Create Account</h2>
          {error && <p style={styles.error}>{error}</p>}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedInput("name")}
            onBlur={() => setFocusedInput(null)}
            required
            style={{
              ...styles.input,
              ...(focusedInput === "name" ? styles.inputFocus : {})
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput(null)}
            required
            style={{
              ...styles.input,
              ...(focusedInput === "email" ? styles.inputFocus : {})
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput(null)}
            required
            style={{
              ...styles.input,
              ...(focusedInput === "password" ? styles.inputFocus : {})
            }}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#884ea0"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#9b59b6"}
          >
            Sign Up
          </button>
          <p style={styles.bottomText}>
            Already have an account? 
            <Link to="/login" style={styles.bottomLink}>Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;




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
   // textAlign: "center",
  },
  inputFocus: {
    borderColor: "#9b59b6",
    boxShadow: "0 0 8px rgba(155, 89, 182, 0.3)",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "1rem",
    backgroundColor: "#9b59b6",
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
