import React from "react";
import Header from "../components/Header";
import DonationForm from "../components/DonationForm";
import "../styles/DonationForm.css";  // Nos styles pour le formulaire
// Vous pouvez également créer et importer un fichier Donate.css pour des styles spécifiques à la page

const Donate = () => {
  return (
    <div className="donate-page">
      <Header />
      <DonationForm />
    </div>
  );
};

export default Donate;
