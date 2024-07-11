import React from "react";
import "../style/UserChooseStyle.css";
import backgroundImage from '../images/logo.png'; 
import { Link } from "react-router-dom";

export default function UserChoose() {
  return (
    <div className="background-page">
    <img src={backgroundImage} alt="Background" className="background-image" />
    <h1>Login as</h1>
    <div className="button-container">
      <button className="action-button">User</button>
      <button className="action-button">Programmer </button>
      <h2>Or</h2>
      <Link to="/signup"  aria-current="page"><button className="action-button">Create new account</button></Link>
    </div>
  </div>
  );
}
