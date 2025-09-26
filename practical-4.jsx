import React, { useState } from "react";

const Prac4 = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("");

  const reset = () => setcount(0);
  const increment = () => setcount(count + 1);
  const decrement = () => setcount(count - 1);
  const increment5 = () => setcount(count + 5);

  // Inline styles
  const containerStyle = {
    textAlign: "center",
    marginTop: "80px",
    fontFamily: "Arial, sans-serif",
    background: "#f9f9f9",
    padding: "40px",
    borderRadius: "15px",
    width: "400px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.1)"
  };

  const headingStyle = { fontSize: "28px", marginBottom: "20px", color: "#333" };
  const subHeadingStyle = { marginTop: "30px", fontSize: "22px", color: "#444" };
  const btnGroupStyle = { display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" };
  const btnStyle = { padding: "10px 20px", fontSize: "16px", borderRadius: "10px", border: "none", cursor: "pointer", color: "white", transition: "0.3s ease" };
  const buttonColors = { reset: { background: "gray" }, increment: { background: "green" }, decrement: { background: "crimson" }, increment5: { background: "royalblue" } };

  const inputStyle = { padding: "10px", fontSize: "16px", borderRadius: "8px", border: "1px solid #ccc", marginTop: "20px", width: "80%" };
  const nameStyle = { marginTop: "15px", fontSize: "18px", color: "#555" };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Count: {count}</h2>
      <div style={btnGroupStyle}>
        <button style={{ ...btnStyle, ...buttonColors.reset }} onClick={reset}>Reset</button>
        <button style={{ ...btnStyle, ...buttonColors.increment }} onClick={increment}>Increment</button>
        <button style={{ ...btnStyle, ...buttonColors.decrement }} onClick={decrement}>Decrement</button>
        <button style={{ ...btnStyle, ...buttonColors.increment5 }} onClick={increment5}>Increment 5</button>
      </div>
      <h1 style={subHeadingStyle}>Welcome to CHARUSAT!!!</h1>

      {/* Name input */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setname(e.target.value)}
        style={inputStyle}
      />

      {/* Display name */}
      <p style={nameStyle}>Name: {name}</p>
    </div>
  );
};

export default Prac4;

