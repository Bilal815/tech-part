import React, { useState, useEffect } from "react";


const ZipCode = () => {
  useEffect(()=>{
    const t = require('../../styles/screens/applicationScreens/zip-code-1.css');
    const p = require('../../styles/screens/applicationScreens/zip-code-2.css');
  },[])

  const [zipcode, _zipcode] = useState("");
  const handleZipCode = (e) => {
      _zipcode(e.target.value);
  }

  return (
    <div className="app-container">   
      
      <div className="app-container2">
        <div className="content-container">
          <div className="chance-box-wrapper">
            <div>
              <p className="medium-font">Find a Puls technician in your area</p>
            </div>
          </div>
          <div className="zip-code-wrapper">
            <div className="zip-code-input-wrapper">
              <div className="new-input-comp">
                <input maxLength={5} type="tel" id="zipcode-input-item" placeholder="Enter your zip code" value={zipcode} onChange={e=>{handleZipCode(e)}}/>
              </div>
            </div>
            <button className="new-action-button" confetti="true" disabled>Continue</button>
            <div className="call-to-us">Questions? <a href="tel:+18557728408">Call (855) 772-8408</a> <span className="separator">|</span> <span className="hoverable">Terms and conditions</span></div>
            <div className="confetti-wrapper">
              <div style={{ position: 'relative' }} />
            </div>
          </div>
        </div>        
      </div>
    </div>

  )
}
export default ZipCode;
