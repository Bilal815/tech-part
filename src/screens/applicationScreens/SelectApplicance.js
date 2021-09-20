import React, { useState, useEffect } from "react";
import { ScrollToTop } from '../../utilities/index';
import axios from 'axios';
import Loader from '../../components/loader/Loader';

const SelectAppliance = (props) => {
  ScrollToTop();

  useEffect(() => {
    const p = require('../../styles/screens/applicationScreens/selectAppliance.css');
    getAppliances();
  }, [])

  const [appliances, _appliances] = useState([]);
  const [loading, _loading] = useState(true);
  const { service_id } = props.match.params;

  const getAppliances = () => {
    axios.post('/api/service-appliances', { service_id: service_id }).then(res => {
      _appliances(res.data.response.detail.appliances);
      _loading(false);
    }).catch(res => {
      console.log('service-appliances api catch:', res);
    });
  }


  return (
    <div className="app-container2">
      <div className="content-container">
        <div className="chance-box-wrapper">
          <div>
            <p className="medium-font">Select the appliance you want to repair?</p>
          </div>
          {loading? <Loader /> :"" }
        </div>
        <div className="select-issue-wrapper">
          {appliances.length ?
            appliances.map((appliance, index) => {
              return (
                <div key={index}>
                  <div className="single-answer-component-wrapper">
                    <div className="fade-on-mount normal-elemnt-active">
                      <button className="answer-content"
                        onClick={e => props.history.push("/zip-code", { servicePrice: appliance.regular_price })}
                      >
                        <label> {appliance.name} </label>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
            :
            ""
          }
        </div>
      </div>
    </div>
  )
}

export default SelectAppliance;
