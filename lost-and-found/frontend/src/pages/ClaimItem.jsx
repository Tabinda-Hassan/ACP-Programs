import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../assets/bg.jpg"; // Adjust path if needed

const ClaimItem = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const editData = location.state?.editData || null;

  const [formData, setFormData] = useState({
    name: "",
    sapId: "",
    email: "",
    contactNumber: "",
    departmentSemester: "",
    itemName: "",
    reason: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (editData?._id) {
        await axios.put(
          `http://localhost:5000/api/claim-items/${editData._id}`,
          formData,
          config
        );
        alert("Claim updated successfully!");
      } else {
        await axios.post(
          "http://localhost:5000/api/claim-items",
          formData,
          config
        );
        alert("Your claim has been submitted!");
      }

      navigate("/found-items");
      clearForm();
    } catch (err) {
      console.error(err);
      setMessage("Failed to submit claim. Please try again.");
    }
  };

  const clearForm = () => {
    setFormData({
      name: "",
      sapId: "",
      email: "",
      contactNumber: "",
      departmentSemester: "",
      itemName: "",
      reason: "",
    });
    setMessage("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#000",
          padding: "1rem 2rem",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "white",
          }}
        >
          Lost & Found
        </div>
        <nav
          style={{
            display: "flex",
            gap: "1.5rem",
          }}
        >
          <Link
            to="/home"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "700",
              fontSize: "1.2rem",
            }}
          >
            Home
          </Link>
          <Link
            to="/found-items"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "700",
              fontSize: "1.2rem",
            }}
          >
            Found Items
          </Link>
          <Link
            to="/report-lost"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "700",
              fontSize: "1.2rem",
            }}
          >
            Report Lost Item
          </Link>
        </nav>
      </header>

      {/* Form */}
      <div
        style={{
          padding: "3rem 1.5rem",
          maxWidth: "500px",
          margin: "4rem auto",
          backgroundColor: "#d7b3e0",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.8rem",
            color: "#4B0082",
            marginBottom: "2rem",
            fontWeight: "bold",
          }}
        >
          {editData ? "Update Claimed Item" : "Claim Lost Item"}
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          {[
            { label: "Your Name", name: "name", type: "text" },
            { label: "SAP ID", name: "sapId", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Contact Number", name: "contactNumber", type: "text" },
            {
              label: "Department and Semester",
              name: "departmentSemester",
              type: "text",
            },
            { label: "Item Name", name: "itemName", type: "text" },
          ].map((field) => (
            <React.Fragment key={field.name}>
              <label
                style={{
                  alignSelf: "flex-start",
                  marginLeft: "10%",
                  marginBottom: "-0.3rem",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#333",
                }}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
                style={{
                  width: "80%",
                  padding: "0.6rem 0.9rem",
                  fontSize: "0.95rem",
                  borderRadius: "8px",
                  border: "1px solid #aaa",
                  backgroundColor: "#fff",
                  alignSelf: "center",
                }}
              />
            </React.Fragment>
          ))}

          <label
            style={{
              alignSelf: "flex-start",
              marginLeft: "10%",
              marginBottom: "-0.3rem",
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#333",
            }}
          >
            Why do you think this item is yours?
          </label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            style={{
              width: "80%",
              padding: "0.6rem 0.9rem",
              fontSize: "0.95rem",
              borderRadius: "8px",
              border: "1px solid #aaa",
              backgroundColor: "#fff",
              minHeight: "120px",
              alignSelf: "center",
            }}
          />

          <button
            type="submit"
            style={{
              width: "80%",
              padding: "0.75rem",
              backgroundColor: "#8e6398",
              color: "#fff",
              fontWeight: "bold",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              alignSelf: "center",
              marginTop: "1rem",
              transition: "background 0.3s ease",
            }}
          >
            {editData ? "Update Claim" : "Submit Claim"}
          </button>

          <button
            type="button"
            onClick={clearForm}
            style={{
              width: "80%",
              padding: "0.75rem",
              backgroundColor: "#e475b6",
              fontWeight: "bold",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              alignSelf: "center",
              marginTop: "0.5rem",
              transition: "background 0.3s ease",
            }}
          >
            Clear Form
          </button>

          {message && (
            <p
              style={{
                textAlign: "center",
                marginTop: "1rem",
                fontSize: "1rem",
                color: "#4B0082",
              }}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ClaimItem;
