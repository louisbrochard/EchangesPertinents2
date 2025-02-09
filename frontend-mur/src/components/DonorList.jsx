// /frontend-mur/src/components/DonorList.jsx
import React, { useEffect, useState } from "react";
import "../styles/home.css";

const DonorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    // Simulation d’une récupération des dons
    setDonors([
      { name: "Louis Brochard", amount: 50 },
      { name: "Alexandre Colson", amount: 100 },
    ]);
  }, []);

  return (
    <div className="donor-list">
      {donors.map((donor, index) => (
        <p key={index} className="donor-item">
          {donor.name} +{donor.amount}€
        </p>
      ))}
    </div>
  );
};

export default DonorList;
