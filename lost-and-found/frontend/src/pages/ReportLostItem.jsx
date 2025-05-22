import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import bgImage from "../assets/formbg.jpg"; // make sure this image exists

const ReportLostItem = () => {
  const location = useLocation();
  const editingItem = location.state?.item || null;

  const [formData, setFormData] = useState({
    name: "",
    sapId: "",
    email: "",
    itemName: "",
    description: "",
    dateLost: "",
    category: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingItem) {
      setFormData(editingItem);
    }
  }, [editingItem]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clearForm = () => {
    setFormData({
      name: "",
      sapId: "",
      email: "",
      itemName: "",
      description: "",
      dateLost: "",
      category: "",
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = editingItem
        ? `http://localhost:5000/api/lost-items/${editingItem._id}`
        : "http://localhost:5000/api/lost-items";

      const method = editingItem ? axios.put : axios.post;

      await method(endpoint, formData);

      alert(editingItem ? "Item updated successfully!" : "Form submitted successfully!");
      navigate("/found-items");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>Lost & Found</div>
        <nav style={styles.nav}>
          <Link to="/home" style={styles.navLink}>Home</Link>
          <Link to="/found-items" style={styles.navLink}>Found Items</Link>
        </nav>
      </header>

      {/* Background Container */}
      <div style={{ ...styles.bgWrapper, backgroundImage: `url(${bgImage})` }}>
        <div style={styles.overlay}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <h2 style={styles.title}>{editingItem ? "Edit Item" : "Report Lost Item"}</h2>
            {error && <p style={styles.error}>{error}</p>}

            <label style={styles.label}>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={styles.input} />

            <label style={styles.label}>SAP ID</label>
            <input type="text" name="sapId" value={formData.sapId} onChange={handleChange} required style={styles.input} />

            <label style={styles.label}>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />

            <label style={styles.label}>Name of Lost Item</label>
            <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} required style={styles.input} />

            <label style={styles.label}>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required style={styles.textarea}></textarea>

            <label style={styles.label}>Date Lost</label>
            <input type="date" name="dateLost" value={formData.dateLost} onChange={handleChange} required style={styles.input} />

            <label style={styles.label}>Category</label>
            <select name="category" value={formData.category} onChange={handleChange} required style={styles.input}>
              <option value="">Select Category</option>
              <option value="ID Card">ID Card</option>
              <option value="Phone">Phone</option>
              <option value="Bag">Bag</option>
              <option value="Clothing">Clothing</option>
              <option value="Other">Other</option>
            </select>

            <button type="submit" style={styles.button}>
              {editingItem ? "Update Item" : "Submit"}
            </button>
            <button type="button" style={styles.clearButton} onClick={clearForm}>
              Clear Form
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReportLostItem;

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    padding: "1rem 2rem",
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
    gap: "1.5rem",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    fontWeight: "700",
    fontSize: "1.2rem",
  },
  bgWrapper: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "5rem",
    paddingBottom: "3rem",
  },
 
  form: {
    backgroundColor: "#d7b3e0",
    padding: "2rem",
    borderRadius: "10px",
    width: "105vw",
    maxWidth: "500px",
  },
  title: {
    textAlign: "center",
    marginBottom: "2rem",
    fontSize: "2rem",
    fontWeight: "780",
    color: "#fff",
  },
  label: {
    margin: "0.5rem 0 0.2rem",
    display: "block",
    fontWeight: "600",
    color: "#444",
  },
  input: {
    width: "90%",
    padding: "0.8rem 1rem",
    marginBottom: "1rem",
    border: "1.5px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    outline: "none",
  },
  textarea: {
    width: "90%",
    padding: "0.8rem 1rem",
    marginBottom: "1rem",
    border: "1.5px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    resize: "vertical",
    minHeight: "100px",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "1rem",
    backgroundColor: "#8e6398", // Color matched from ClaimItem
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "1rem",
  },
  clearButton: {
    width: "100%",
    padding: "1rem",
    backgroundColor: "#e475b6",
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "0.75rem",
  },
  error: {
    color: "#d32f2f",
    marginBottom: "1rem",
    fontWeight: "600",
  },
};

// Add focus styles via JS
document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
    input:focus, textarea:focus, select:focus {
      border-color: #a188f2 !important;
      box-shadow: 0 0 0 2px rgba(155, 89, 182, 0.25);
    }
  </style>`
);
