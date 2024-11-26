import React from "react";
import logo from "../Images/logo.jpg";  // Se till att sökvägen till bilden är korrekt
import "../CSS/header.css";  // Se till att sökvägen till CSS-filen är korrekt

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${logo})`,  // Dynamiskt använda logo-bilden som bakgrund
        backgroundSize: 'contain',        // Gör så att hela bilden syns utan att beskäras
        backgroundPosition: 'top',     // Centrerar bakgrundsbilden
        backgroundRepeat: 'no-repeat',    // Förhindrar att bakgrunden upprepas
        backgroundAttachment: 'fixed',    // Behåller bakgrundsbilden fast när användaren scrollar
        height: '70vh',                    // Gör headern responsiv (50% av viewporthöjden)
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',  // Textskugga för bättre läsbarhet
        width: '100%'                      // Full bredd av skärmen
      }}
    >
      
    </header>
  );
};

export default Header;












