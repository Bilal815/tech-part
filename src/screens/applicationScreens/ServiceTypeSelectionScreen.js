import React, { useState, useEffect } from "react";
import { ScrollToTop } from '../../utilities/index';
import axios from 'axios';
import Loader from '../../components/loader/Loader';
import { services } from "../../reduxStore/constants/servicesConstants";

const ServiceOptionsScreen = (props) => {
  ScrollToTop();
  
  const { service_id, service_name } = props.match.params;

  useEffect(() => {
    const p = require('../../styles/screens/applicationScreens/tvSize.css');
    getServiceOptions();
  }, [])

  const [serviceOptions, setServiceOptions] = useState([]);
  const [loading, _loading] = useState(true);

  const getServiceOptions = () => {
    axios.post('/api/service-appliances', {service_id: service_id}).then(res => {
      setServiceOptions(res.data.response.detail.appliances);
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
            <p className="medium-font">{services[service_name].optionsQuestion}</p>
          </div>
          {loading? <Loader /> :"" }
        </div>        
        <div className="select-issue-wrapper">
          {serviceOptions.length?
              serviceOptions.map((option,index)=> {
                return(
                  <div key={index}>
                    <div className="single-answer-component-wrapper">
                      <div className="fade-on-mount normal-elemnt-active">
                        <button className="answer-content" 
                          onClick={e => {
                            props.history.push("/zip-code", { 
                              servicePrice: option.regular_price,
                              service_id: service_id,
                              slug: service_name,
                              service_option: option.id
                            })}}
                        >
                          <label> {option.name} </label>
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
export default ServiceOptionsScreen;
