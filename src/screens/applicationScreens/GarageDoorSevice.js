import React, { useState, useEffect } from "react";
import { ScrollToTop } from '../../utilities/index';
import axios from 'axios';
import Loader from '../../components/loader/Loader';

const GarageDoorService = (props) => {
  ScrollToTop();

  useEffect(() => {
    const p = require('../../styles/screens/applicationScreens/handymanService.css');
    getgarageDoorService();
  }, [])

  const [garageDoorService, _garageDoorService] = useState([]);
  const [loading, _loading] = useState(true);
  const { service_id } = props.match.params;

  const getgarageDoorService = () => {
    axios.post('/api/service-appliances', { service_id: service_id }).then(res => {
      _garageDoorService(res.data.response.detail.appliances);
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
            <p className="medium-font">What problem are you facing?</p>
          </div>
          {loading? <Loader /> :"" }
        </div>
        <div className="select-issue-wrapper">
          {garageDoorService.length ?
            garageDoorService.map((service, index) => {
              return (
                <div key={index}>
                  <div className="single-answer-component-wrapper">
                    <div className="fade-on-mount normal-elemnt-active">
                      <button className="answer-content"
                        onClick={e => props.history.push("/zip-code", { servicePrice: service.regular_price, service_id: service_id, slug: "garage-door-repair" })}
                      >
                        <label> {service.name} </label>
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
export default GarageDoorService;
