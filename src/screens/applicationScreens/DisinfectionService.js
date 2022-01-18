import React, { useState, useEffect } from "react";
import { ScrollToTop } from '../../utilities/index';
import axios from 'axios';
import Loader from '../../components/loader/Loader';

const DisinfectionService = (props) => {
  ScrollToTop();

  useEffect(() => {
    const p = require('../../styles/screens/applicationScreens/handymanService.css');
    getDisinfectionService();
  }, [])

  const [disinfectionService, _disinfectionService] = useState([]);
  const [loading, _loading] = useState(true);
  const { service_id } = props.match.params;

  const getDisinfectionService = () => {
    axios.post('/api/service-appliances', { service_id: service_id }).then(res => {
      _disinfectionService(res.data.response.detail.appliances);
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
            <p className="medium-font">What kind of property is this?</p>
          </div>
          {loading? <Loader /> :"" }
        </div>
        <div className="select-issue-wrapper">
          {disinfectionService.length ?
            disinfectionService.map((service, index) => {
              return (
                <div key={index}>
                  <div className="single-answer-component-wrapper">
                    <div className="fade-on-mount normal-elemnt-active">
                      <button className="answer-content"
                        onClick={e => props.history.push("/zip-code", { servicePrice: service.regular_price, service_id: service_id, slug: "disinfection-services" })}
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
export default DisinfectionService;
