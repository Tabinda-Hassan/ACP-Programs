import React from "react";
import { Link } from "react-router-dom";

// Sample item data (replace with dynamic data later)
const foundItems = [
  { id: 1, title: "Black Backpack", image: "/images/bag.jpg", description: "Found near cafeteria" },
  { id: 2, title: "Water Bottle", image: "/images/bottle.jpg", description: "Left in lecture hall" },
  { id: 3, title: "Phone", image: "/images/phone.jpg", description: "Found in library" },
  { id: 4, title: "Scientific Calculator", image: "/images/calculator.jpg", description: "Found in lab" },
  { id: 5, title: "Laptop Charger", image: "/images/charger.jpg", description: "Dropped outside admin block" },
  { id: 6, title: "ID Card", image: "/images/idcard.jpg", description: "Submitted to security" },
  { id: 7, title: "USB", image: "/images/usb.jpg", description: "Found on study table" },
  { id: 8, title: "Earphones", image: "/images/earphones.jpg", description: "Dropped near hostel" },
  { id: 9, title: "Notebook", image: "/images/notebook.jpg", description: "Found in auditorium" },
];

const FoundItems = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>Lost & Found</div>
        <nav style={styles.nav}>
          <Link to="/home" style={styles.navLink}>Home</Link>
          <Link to="/report-lost" style={styles.navLink}>Report Lost Item</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <h1 style={styles.pageTitle}>Reported Found Items</h1>
        <div style={styles.cardGrid}>
          {foundItems.map((item) => (
            <div key={item.id} style={styles.card}>
              <img src={item.image} alt={item.title} style={styles.cardImage} />
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.description}</p>
              <Link
                to="/claim-item"
                state={{ itemTitle: item.title }}
                style={styles.claimButton}
              >
                Claim This Item
              </Link>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Lost & Found</p>
        <p style={{ fontSize: "0.85rem", color: "#aaa" }}>University Smart Project | Made with 💜</p>
      </footer>
    </div>
  );
};

export default FoundItems;

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f4fc",
    color: "#333",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "1.5rem",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "800",
  },
  main: {
    padding: "2rem 2rem 4rem 2rem",
    flex: 1,
  },
  pageTitle: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "2rem",
    color: "#5f4b8b",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    padding: "0 1rem",
  },
  card: {
    backgroundColor: "#F0CCE5",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
    padding: "1rem",
    textAlign: "center",
    transition: "transform 0.2s ease-in-out",
  },
  cardImage: {
    width: "100%",
    height: "390px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#5f4b8b",
    marginBottom: "0.5rem",
  },
  cardDesc: {
    fontSize: "0.95rem",
    color: "#666",
  },
  claimButton: {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.5rem 1.2rem",
    backgroundColor: "#7F55B1",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "background 0.3s ease",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  },
  footer: {
    backgroundColor: "#000",
    color: "#eee",
    textAlign: "center",
    padding: "2rem 1rem",
  },
};
