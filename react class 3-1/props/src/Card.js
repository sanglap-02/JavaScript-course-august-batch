import React from "react";

function Card({ name, description, image,no }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.description}>{description}</p>
      <p style={styles.number}>Card number {no}</p>
    </div>
  );
}

// Inline styles for the card
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    width: "250px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    margin: "10px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  name: {
    margin: "10px 0",
    fontSize: "20px",
  },
  description: {
    color: "black",
  },
  number: {
    fontWeight: "bold",
    color: "gray",
  }
};

export default Card;
