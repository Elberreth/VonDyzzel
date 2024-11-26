import React from "react";
import logo from "../Images/logo.jpg";  // Make sure the image path is correct
import "../CSS/header.css";

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${logo})`,   // Background image URL
        backgroundSize: 'cover',            // Ensures the image covers the entire header area
        backgroundPosition: 'center',       // Centers the background image
        backgroundAttachment: 'fixed',      // Keeps the image fixed during scroll
        height: '50vh',                      // Responsive height (50% of the viewport height)
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Text shadow for better readability
        width: '100%',                      // Ensures the header takes up the full width of the screen
      }}
    >
      <h1>Välkommen till Min Webbplats</h1>
    </header>
  );
};

export default Header;









