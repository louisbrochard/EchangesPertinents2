import React, { useState } from "react";
import "../styles/DonationForm.css";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    civility: "monsieur",
    nom: "",
    prenom: "",
    email: "",
    adresse: "",
    codePostal: "",
    ville: "",
    pays: "France",
  });

  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");

  // Liste des pays (sans "France" qui sera affiché en premier)
  const countries = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Antigua-et-Barbuda",
    "Arabie Saoudite",
    "Argentine",
    "Arménie",
    "Australie",
    "Autriche",
    "Azerbaïdjan",
    "Bahamas",
    "Bahreïn",
    "Bangladesh",
    "Barbade",
    "Belgique",
    "Belize",
    "Bénin",
    "Bhoutan",
    "Biélorussie",
    "Birmanie",
    "Bolivie",
    "Bosnie-Herzégovine",
    "Botswana",
    "Brésil",
    "Brunéi",
    "Bulgarie",
    "Burkina Faso",
    "Burundi",
    "Cambodge",
    "Cameroun",
    "Canada",
    "Cap-Vert",
    "Chili",
    "Chine",
    "Chypre",
    "Colombie",
    "Comores",
    "Congo (Brazzaville)",
    "Congo (Kinshasa)",
    "Corée du Nord",
    "Corée du Sud",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatie",
    "Cuba",
    "Danemark",
    "Djibouti",
    "Dominique",
    "Égypte",
    "Émirats Arabes Unis",
    "Équateur",
    "Érythrée",
    "Espagne",
    "Estonie",
    "Eswatini",
    "États-Unis",
    "Éthiopie",
    "Fidji",
    "Finlande",
    // On insère "France" en premier, puis on ajoute le reste trié
    "Gabon",
    "Gambie",
    "Géorgie",
    "Ghana",
    "Grèce",
    "Grenade",
    "Guatemala",
    "Guinée",
    "Guinée-Bissau",
    "Guinée équatoriale",
    "Guyana",
    "Haïti",
    "Honduras",
    "Hongrie",
    "Îles Cook",
    "Îles Marshall",
    "Îles Salomon",
    "Inde",
    "Indonésie",
    "Irak",
    "Iran",
    "Irlande",
    "Islande",
    "Israël",
    "Italie",
    "Jamaïque",
    "Japon",
    "Jordanie",
    "Kazakhstan",
    "Kenya",
    "Kirghizistan",
    "Kiribati",
    "Koweït",
    "Laos",
    "Lesotho",
    "Lettonie",
    "Liban",
    "Libéria",
    "Libye",
    "Liechtenstein",
    "Lituanie",
    "Luxembourg",
    "Macédoine du Nord",
    "Madagascar",
    "Malaisie",
    "Malawi",
    "Maldives",
    "Mali",
    "Malte",
    "Maroc",
    "Maurice",
    "Mauritanie",
    "Mexique",
    "Micronésie",
    "Moldavie",
    "Monaco",
    "Mongolie",
    "Monténégro",
    "Mozambique",
    "Namibie",
    "Nauru",
    "Népal",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norvège",
    "Nouvelle-Zélande",
    "Oman",
    "Ouganda",
    "Ouzbékistan",
    "Pakistan",
    "Palaos",
    "Panama",
    "Papouasie-Nouvelle-Guinée",
    "Paraguay",
    "Pays-Bas",
    "Pérou",
    "Philippines",
    "Pologne",
    "Portugal",
    "Qatar",
    "République centrafricaine",
    "République dominicaine",
    "République tchèque",
    "Roumanie",
    "Royaume-Uni",
    "Russie",
    "Rwanda",
    "Saint-Christophe-et-Niévès",
    "Sainte-Lucie",
    "Saint-Marin",
    "Saint-Vincent-et-les-Grenadines",
    "Salvador",
    "Samoa",
    "São Tomé-et-Príncipe",
    "Sénégal",
    "Serbie",
    "Seychelles",
    "Sierra Leone",
    "Singapour",
    "Slovaquie",
    "Slovénie",
    "Somalie",
    "Soudan",
    "Soudan du Sud",
    "Sri Lanka",
    "Suède",
    "Suisse",
    "Suriname",
    "Syrie",
    "Tadjikistan",
    "Tanzanie",
    "Tchad",
    "Thaïlande",
    "Timor oriental",
    "Togo",
    "Tonga",
    "Trinité-et-Tobago",
    "Tunisie",
    "Turkménistan",
    "Turquie",
    "Tuvalu",
    "Ukraine",
    "Uruguay",
    "Vanuatu",
    "Vatican",
    "Venezuela",
    "Viêt Nam",
    "Yémen",
    "Zambie",
    "Zimbabwe",
  ];

  // Tri alphabétique des pays (hors France) puis insertion de France en tête
  const sortedCountries = ["France", ...countries.sort((a, b) => a.localeCompare(b))];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDonationClick = (amount) => {
    setSelectedAmount(amount);
    if (amount !== "other") {
      setCustomAmount("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la validation supplémentaire et l'envoi des données vers le backend
    const donationValue = selectedAmount === "other" ? customAmount : selectedAmount;
    console.log("Formulaire soumis", { ...formData, donation: donationValue });
    // Par exemple, rediriger vers Stripe ou appeler une API de paiement
  };

  return (
    <form onSubmit={handleSubmit} className="donation-form">
      <h2>Données Personnelles</h2>
      <div className="form-section">
        <div className="form-group">
          <label>Civilité :</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="civility"
                value="monsieur"
                checked={formData.civility === "monsieur"}
                onChange={handleChange}
              />
              Monsieur
            </label>
            <label>
              <input
                type="radio"
                name="civility"
                value="madame"
                checked={formData.civility === "madame"}
                onChange={handleChange}
              />
              Madame
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Nom :</label>
          <input
            type="text"
            name="nom"
            maxLength="50"
            pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s-]+"
            required
            value={formData.nom}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Prénom :</label>
          <input
            type="text"
            name="prenom"
            maxLength="50"
            pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s-]+"
            required
            value={formData.prenom}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email :</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Adresse Postale :</label>
          <input
            type="text"
            name="adresse"
            maxLength="100"
            pattern="[A-Za-z0-9À-ÖØ-öø-ÿ\s,'-]+"
            required
            value={formData.adresse}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Code Postal :</label>
          <input
            type="text"
            name="codePostal"
            pattern="\d+"
            required
            value={formData.codePostal}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Ville :</label>
          <input
            type="text"
            name="ville"
            maxLength="50"
            pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s-]+"
            required
            value={formData.ville}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Pays :</label>
          <select name="pays" value={formData.pays} onChange={handleChange} required>
            {sortedCountries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="donation-section">
        <h2>Merci pour votre soutien !</h2>
        <p>Montant de votre don :</p>
        <div className="donation-buttons">
          <button type="button" onClick={() => handleDonationClick("5")}>
            5€
          </button>
          <button type="button" onClick={() => handleDonationClick("10")}>
            10€
          </button>
          <button type="button" onClick={() => handleDonationClick("20")}>
            20€
          </button>
          <button type="button" onClick={() => handleDonationClick("50")}>
            50€
          </button>
          <button type="button" onClick={() => handleDonationClick("other")}>
            Autre
          </button>
        </div>
        {selectedAmount === "other" && (
          <div className="custom-donation">
            <label>Montant personnalisé :</label>
            <input
              type="number"
              name="customAmount"
              min="1"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              required
            />
          </div>
        )}
      </div>

      <div className="form-group conditions">
        <p className="conditions-text">
          En continuant j'accepte les conditions générales et la Politique de Confidentialité qui s'appliquent à nos services
        </p>
      </div>

      <div className="form-group">
        <button type="submit">Valider et Poursuivre le paiement</button>
      </div>
    </form>
  );
};

export default DonationForm;
