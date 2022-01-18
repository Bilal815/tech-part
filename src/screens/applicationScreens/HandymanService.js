import React, { useState, useEffect } from "react";
import { ScrollToTop } from '../../utilities/index';
import axios from 'axios';
import Loader from '../../components/loader/Loader';

const HandymanService = (props) => {
  ScrollToTop();

  useEffect(() => {
    const p = require('../../styles/screens/applicationScreens/handymanService.css');
    getHandymanService();
  }, [])

  const [handymanService, _handymanService] = useState([]);
  const [loading, _loading] = useState(true);
  const { service_id } = props.match.params;

  const getHandymanService = () => {
    axios.post('/api/service-appliances', { service_id: service_id }).then(res => {
      _handymanService(res.data.response.detail.appliances);
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
            <p className="medium-font">Choose a service to get started</p>
          </div>
          {loading? <Loader /> :"" }
        </div>
        <div className="services-search">
          <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false" className="react-autosuggest__container">
            <input type="text" autoComplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" className="autosuggest-input" placeholder="Handyman, tv mounting, fridge repair" />
            <div id="react-autowhatever-1" role="listbox" className="react-autosuggest__suggestions-container" />
          </div>
          <img src="http://puls.com/create-appointment/static/media/search.1645d4df.svg" className="search-img" />
        </div>
        <div className="select-issue-wrapper">
          {handymanService.length ?
            handymanService.map((service, index) => {
              return (
                <div key={index}>
                  <div className="single-answer-component-wrapper">
                    <div className="fade-on-mount normal-elemnt-active">
                      <button className="answer-content"
                        onClick={e => props.history.push("/zip-code", { servicePrice: service.regular_price, service_id: service_id, slug: "handyman-services" })}
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
export default HandymanService;
