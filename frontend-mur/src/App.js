// /frontend-mur/src/App.js
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./styles/global.css"; // (Optionnel si déjà importé dans index.js)

function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
    </div>
  );
}

export default App;
