// /frontend-mur/src/components/QRCodeDisplay.jsx
import React from "react";
import "../styles/qrCode.css";

const QRCodeDisplay = () => {
  return (
    <div className="qr-code">
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://example.com/donate"
        alt="QR Code"
      />
    </div>
  );
};

export default QRCodeDisplay;
