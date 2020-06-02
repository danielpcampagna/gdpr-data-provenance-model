import React from 'react';
import logo from './logo.svg';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
        <header className="Navbar-header">
            <img src={logo} alt="logo" className="Navbar-logo"/>
            <p className="Navbar-title">
            GDPR Data Provenance Model.
            </p>
            <a
            className="Navbar-link"
            href="https://gdpr-info.eu"
            target="_blank"
            rel="noopener noreferrer"
            >
            Read the GDPR
            </a>
        </header>
    </div>
  );
}

export default Navbar;
