// src/LandVault.jsx
import React from 'react';
import './LandVault.css';

const LandVault = () => {
    
  return (
    
    <div className="land-vault">
      <header className="header">
        <h1>Land Vault</h1>
      </header>
      <div className='description-box'>
      <p>Welcome to Land Vault, This is the Dapp where you can automatically tranfer the crypto asset at particular given time</p>
      <button onClick={() => window.location.href = 'homepage.jsx'} className="button">Try now</button>
      </div>
      {/* <div className="description-box">
        <div class="pic">
        <img src="src/assets/GQ Crypto FullPage Web.webp" alt="height" border="0" />
      
        </div>
        <p>Welcome to Land Vault, This is the Dapp where you can automatically tranfer the crypto asset at particular given time </p>
        <br />
        <button>Get Started</button>
        </div> */}
      </div>
   



  );
};

export default LandVault;
