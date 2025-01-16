import React from "react";
import "./PaulAAlba.css";

const PaulAAlba = () => (
  <div>
    {/* Main container for text */}
    <div className="paul-alba-container">
      <a
        href="https://www.albagoldsystems.com"
        target="_blank"
        rel="noopener noreferrer"
        className="paul-alba-text"
      >
        Paul A Alba
      </a>
    </div>

    {/* Container for the running bear animation */}
    <div className="running-bear-container">
      <div className="running-bear"></div>
    </div>
  </div>
);

export default PaulAAlba;
