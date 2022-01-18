import React, { useState, useEffect } from "react";
import axios from "axios";


const ZipCode = (props) => {
  useEffect(()=>{
    const t = require('../../styles/screens/applicationScreens/zip-code-1.css');
    const p = require('../../styles/screens/applicationScreens/zip-code-2.css');
  },[])

  const { servicePrice, service_id, slug } = props.location.state?props.location.state:"";
  // console.log("Service Price: ", servicePrice)
  // console.log("Service id: ", service_id)
  // console.log("slug: ", slug)

  const [zipcode, _zipcode] = useState("");
  const handleZipCode = (e) => {
      _zipcode(e.target.value);
  }
  
  const verifyZipCode = (e) => {
    let body = {}  
    if(zipcode.length > 0){
      if(isNaN(Number(zipcode))){
        body = {
          city: zipcode
        }
      } else {
        body = {
          zip_code: zipcode
        }
      }
      axios.post('/api/zip-code/verify', body).then(res => {
        if(res.status === 200){
          let url = "/book-a-service/service/" + slug + "/" + service_id + "/" + "q1" 
          props.history.push(url)
          // alert(res.data.response.message)
        }
        // console.log('services api response:', res.data.response.detail);
      }).catch(res => {
        console.log('services api catch:', res);
      });
    }
  }

  return (
    <div className="app-container">   
      
      <div className="app-container2">
        <div className="content-container">
          <div className="chance-box-wrapper">
            <div>
              <p className="medium-font">Find a tech part technician in your area</p>
            </div>
          </div>
          <div className="zip-code-wrapper">
            <div className="zip-code-input-wrapper">
              <div className="new-input-comp">
                <input type="tel" id="zipcode-input-item" placeholder="Enter your zip code" value={zipcode} onChange={e=>{handleZipCode(e)}}/>
              </div>
            </div>
            <button 
              className="new-action-button" 
              confetti="true" 
              disabled={!(zipcode.length > 0)}
              onClick={(e)=>{verifyZipCode()}}
            >
              Continue
            </button>
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
