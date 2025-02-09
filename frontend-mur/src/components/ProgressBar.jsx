// /frontend-mur/src/components/ProgressBar.jsx
import React, { useState, useEffect } from "react";
import "../styles/home.css";

const ProgressBar = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const goal = 10000;

  useEffect(() => {
    // Simulation d’un montant collecté (exemple)
    setTotalAmount(5000);
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress"
          style={{ height: `${(totalAmount / goal) * 100}%` }}
        />
      </div>
      <p>
        {totalAmount}€ / {goal}€
      </p>
    </div>
  );
};

export default ProgressBar;
