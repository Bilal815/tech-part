import React, { useState, useEffect } from "react";
import { ScrollToTop } from "./../../utilities/index";
import { Collapse } from "react-bootstrap";
import axios from "axios";
import Loader from '../../components/loader/Loader';


// import PricingContainer from "./../../components/globalComponents/PricingContainer";

const PricingScreen = ({ services }) => {
  const [pricingContainer, _pricingContainer] = useState("1");
  const [OpenPhoneModelSelect, _OpenPhoneModelSelect] = useState(false);
  const [OpenPhoneProblemSelect, _OpenPhoneProblemSelect] = useState(false);
  const [appliances, _appliances] = useState([]);
  const [selectedService, _selectedService] = useState({});
  const [loading, _loading] = useState(true);

  useEffect(() => {
    let t = require("../../styles/screens/headerScreens/pricingScreen.css");

    return () => {
      t = null;
    };
  }, []);

  useEffect(() => {
    if (services.length > 0) {
      let selected = {};
      services.forEach((service) => {
        selected[service.slug] = service;
      });

      getServiceAppliances(selected["home-appliances"].id);
      _selectedService(selected);
    }
  }, [services]); 
  
  useEffect(() => {
    if (Object.keys(selectedService).length > 0) {
      switch (pricingContainer) {
        case "1":
          getServiceAppliances(selectedService["home-appliances"].id);
          break;
  
        case "2":
          getServiceAppliances(selectedService["tv-mounting"].id);
          break;
  
        case "3":
          getServiceAppliances(selectedService["handyman-services"].id);
          break;
  
        case "4":
          getServiceAppliances(selectedService["phone-repair"].id);
          break;
  
        default:
          break;
      }
    }
  }, [pricingContainer]);

  const getServiceAppliances = (id) => {
    axios
      .post("/api/service-appliances", { service_id: id })
      .then((res) => {
        let data = res.data.response.detail.appliances;
        _appliances(data);
        _loading(false);
      })
      .catch((res) => {
        console.log("service-appliances api catch:", res);
        _loading(false);
      });
  };

  const switchTabs = (e, tab) => {
    let tabContainer = document.getElementById("tabs-container");
    tabContainer.childNodes.forEach((child) => {
      child.classList.remove("selected");
    });
    let item = e.target;
    item.classList.add("selected");
    _loading(true);
    _pricingContainer(tab);
  };

  const PricingContainer = () => {
    const HomeAppliancesPricing = () => {
      return (
        <div className="jsx-2708165770 pricing-section">
          <h2 className="jsx-2708165770">Home Appliances Prices</h2>
          <h5 className="jsx-2708165770">
            Let us bring you peace of mind today
          </h5>
          <div className="jsx-2708165770 img-wrapper">
            <img
              src="https://d7gh5vrfihrl.cloudfront.net/website/pricing/appliance_pricing.svg"
              className="jsx-2708165770"
            />
          </div>
          <div className="jsx-2290976772 table-wrapper">
            <table className="jsx-2290976772">
              <thead className="jsx-2290976772">
                <tr className="jsx-2290976772">
                  <th className="jsx-2290976772 name" />
                  <th className="jsx-2290976772 regular bold-text">
                    Regular <br className="jsx-2290976772" />
                    Price
                  </th>
                  <th className="jsx-2290976772 member bold-text">
                    <label className="jsx-2290976772 bold-text logo">
                      puls<span className="jsx-2290976772 bold-text">+</span>
                    </label>{" "}
                    Member
                  </th>
                </tr>
              </thead>
              <tbody className="jsx-2290976772">
               {appliances.map((appliance, key)=>{
                 return (
                  <tr key={key} className="jsx-2290976772">
                    <td className="jsx-2290976772 name">
                      <div className="jsx-2290976772 bold-text">
                        {appliance.name}
                      </div>
                    </td>
                    <td className="jsx-2290976772 regular">
                      <div className="jsx-2290976772 price">${appliance.regular_price}</div>
                    </td>
                    <td className="jsx-2290976772 member">
                      <div className="jsx-2290976772 price">${appliance.member_price}</div>
                    </td>
                  </tr>
                 );
               })}
              </tbody>
            </table>
          </div>
          <div className="jsx-2708165770 disclamer-wrapper">
            <div className="jsx-3511425025 price-disclaimer">
              <img
                src="https://d7gh5vrfihrl.cloudfront.net/website/icons/bulb.png"
                className="jsx-3511425025"
              />
              <div className="jsx-3511425025 bold-text">
                These are average rates for service.
              </div>
              <div className="jsx-3511425025">
                Pricing will be confirmed once a technician is assigned to your
                requested appointment.
              </div>
            </div>
            <a
              href={"/book-a-service/service/home-appliances/"+selectedService["home-appliances"].id}
              className="jsx-3511425025"
            >
              Repair my appliance
            </a>
          </div>
        </div>
      );
    };

    const TvMountingPricing = () => {
      return (
        <div className="jsx-2708165770 pricing-section">
          <h2 className="jsx-2708165770">TV Mounting Prices</h2>
          <h5 className="jsx-2708165770">
            Get an upfront quote. We'll do the heavy lifting
          </h5>
          <div className="jsx-2708165770 img-wrapper">
            <img
              src="https://d7gh5vrfihrl.cloudfront.net/website/pricing/tv_pricing.svg"
              className="jsx-2708165770"
            />
          </div>
          <div className="jsx-2290976772 table-wrapper">
            <table className="jsx-2290976772">
              <thead className="jsx-2290976772">
                <tr className="jsx-2290976772">
                  <th className="jsx-2290976772 name" />
                  <th className="jsx-2290976772 regular bold-text">
                    Regular <br className="jsx-2290976772" />
                    Price
                  </th>
                  <th className="jsx-2290976772 member bold-text">
                    <label className="jsx-2290976772 bold-text logo">
                      puls<span className="jsx-2290976772 bold-text">+</span>
                    </label>{" "}
                    Member
                  </th>
                </tr>
              </thead>
              <tbody className="jsx-2290976772">
                {appliances.map((appliance, key)=>{
                  return (
                    <tr key={key} className="jsx-2290976772">
                      <td className="jsx-2290976772 name">
                        <div className="jsx-2290976772 bold-text">
                          {appliance.name}
                        </div>
                      </td>
                      <td className="jsx-2290976772 regular">
                        <div className="jsx-2290976772 price">${appliance.regular_price}</div>
                      </td>
                      <td className="jsx-2290976772 member">
                        <div className="jsx-2290976772 price">${appliance.member_price}</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="jsx-2708165770 disclamer-wrapper">
            <div className="jsx-3511425025 price-disclaimer">
              <img
                src="https://d7gh5vrfihrl.cloudfront.net/website/icons/bulb.png"
                className="jsx-3511425025"
              />
              <div className="jsx-3511425025 bold-text">
                These are average rates for service.
              </div>
              <div className="jsx-3511425025">
                Pricing will be confirmed once a technician is assigned to your
                requested appointment.
              </div>
            </div>
            <a
              href={"/book-a-service/service/tv-mounting/"+selectedService["tv-mounting"].id}
              className="jsx-3511425025"
            >
              Mount my TV
            </a>
          </div>
        </div>
      );
    };

    const HandyManPricing = () => {
      return (
        <div className="jsx-2708165770 pricing-section">
          <h2 className="jsx-2708165770">Handyman Services Prices</h2>
          <h5 className="jsx-2708165770">
            Book a service in seconds with Puls local techs
          </h5>
          <div className="jsx-2708165770 img-wrapper">
            <img
              src="https://d7gh5vrfihrl.cloudfront.net/website/pricing/handyman.svg"
              className="jsx-2708165770"
            />
          </div>
          <div className="jsx-2290976772 table-wrapper">
            <table className="jsx-2290976772">
              <thead className="jsx-2290976772">
                <tr className="jsx-2290976772">
                  <th className="jsx-2290976772 name" />
                  <th className="jsx-2290976772 regular bold-text">
                    Regular <br className="jsx-2290976772" />
                    Price*
                  </th>
                  <th className="jsx-2290976772 member bold-text">
                    <label className="jsx-2290976772 bold-text logo">
                      puls<span className="jsx-2290976772 bold-text">+</span>
                    </label>{" "}
                    Member*
                  </th>
                </tr>
              </thead>
              <tbody className="jsx-2290976772">
              {appliances.map((appliance, key)=>{
                 return (
                  <tr key={key} className="jsx-2290976772">
                    <td className="jsx-2290976772 name">
                      <div className="jsx-2290976772 bold-text">
                        {appliance.name}
                      </div>
                    </td>
                    <td className="jsx-2290976772 regular">
                      <div className="jsx-2290976772 price">${appliance.regular_price}</div>
                    </td>
                    <td className="jsx-2290976772 member">
                      <div className="jsx-2290976772 price">${appliance.member_price}</div>
                    </td>
                  </tr>
                 );
               })}
              </tbody>
            </table>
          </div>
          <div className="jsx-2708165770 disclamer-wrapper">
            <p className="jsx-2708165770 disclaimer">
              * Estimates and pricing are based on a standard scope of work and
              can change once the technician is on-site to assess the issue. You
              will have a chance to review final pricing before the work begins.
            </p>
            <div className="jsx-3511425025 price-disclaimer">
              <img
                src="https://d7gh5vrfihrl.cloudfront.net/website/icons/bulb.png"
                className="jsx-3511425025"
              />
              <div className="jsx-3511425025 bold-text">
                These are average rates for service.
              </div>
              <div className="jsx-3511425025">
                Pricing will be confirmed once a technician is assigned to your
                requested appointment.
              </div>
            </div>
            <a
              href={"/book-a-service/service/handyman-services/"+selectedService["handyman-services"].id}
              className="jsx-3511425025"
            >
              Book a Service
            </a>
          </div>
        </div>
      );
    };

    const PhoneRepairPricing = () => {
      return (
        <div className="jsx-2708165770 pricing-section">
          <h2 className="jsx-2708165770">iPhone Repair Prices</h2>
          <h5 className="jsx-2708165770">
            Pick your device and issue for an instant, upfront quote
          </h5>
          <div className="jsx-2708165770 img-wrapper">
            <img
              src="https://d7gh5vrfihrl.cloudfront.net/website/pricing/phone_pricing.svg"
              className="jsx-2708165770"
            />
          </div>
          <div style={{ padding: "0px 20px" }}>
            <div>
              <div className="jsx-460446658 wrapper selections-phone">
                <>
                  <div
                    className="jsx-460446658 selected"
                    onClick={() => _OpenPhoneModelSelect(!OpenPhoneModelSelect)}
                    aria-controls="example-collapse-text"
                    aria-expanded={OpenPhoneModelSelect}
                  >
                    <label className="jsx-460446658">Select your model</label>
                    <span className="jsx-460446658">
                      <span className="jsx-460446658 bold-text">XS Max</span>
                      <img
                        src="https://d7gh5vrfihrl.cloudfront.net/website/arrow.svg"
                        className="jsx-460446658"
                      />
                    </span>
                  </div>

                  <Collapse in={OpenPhoneModelSelect}>
                    <ul className="jsx-460446658 open">
                      <li className="jsx-460446658">XS Max</li>
                      <li className="jsx-460446658">XR</li>
                      <li className="jsx-460446658">XS</li>
                      <li className="jsx-460446658">X</li>
                      <li className="jsx-460446658">8 Plus</li>
                      <li className="jsx-460446658">8</li>
                      <li className="jsx-460446658">7 Plus</li>
                      <li className="jsx-460446658">7</li>
                      <li className="jsx-460446658">6s Plus</li>
                      <li className="jsx-460446658">6s</li>
                      <li className="jsx-460446658">6 Plus</li>
                      <li className="jsx-460446658">6</li>
                    </ul>
                  </Collapse>
                </>
              </div>

              <div className="jsx-460446658 wrapper selections-phone">
                <>
                  <div
                    className="jsx-460446658 selected"
                    onClick={() =>
                      _OpenPhoneProblemSelect(!OpenPhoneProblemSelect)
                    }
                    aria-controls="example-collapse-text"
                    aria-expanded={OpenPhoneProblemSelect}
                  >
                    <label className="jsx-460446658">
                      Choose issue(pick up to 3)
                    </label>
                    <span className="jsx-460446658">
                      <span className="jsx-460446658 bold-text"></span>
                      <img
                        src="https://d7gh5vrfihrl.cloudfront.net/website/arrow.svg"
                        className="jsx-460446658"
                      />
                    </span>
                  </div>

                  <Collapse in={OpenPhoneProblemSelect}>
                    <ul className="jsx-2084971012 open">
                      <li className="jsx-2084971012 bold-text selected-item">
                        + LCD install
                      </li>
                      <li className="jsx-2084971012 bold-text">+ Battery</li>
                    </ul>
                  </Collapse>
                </>
              </div>

              <div className="jsx-2290976772 table-wrapper">
                <table className="jsx-2290976772">
                  <thead className="jsx-2290976772">
                    <tr className="jsx-2290976772">
                      <th className="jsx-2290976772 name" />
                      <th className="jsx-2290976772 regular bold-text">
                        Regular <br className="jsx-2290976772" />
                        Price
                      </th>
                      <th className="jsx-2290976772 member bold-text">
                        <label className="jsx-2290976772 bold-text logo">
                          puls
                          <span className="jsx-2290976772 bold-text">+</span>
                        </label>{" "}
                        Member
                      </th>
                    </tr>
                  </thead>
                  <tbody className="jsx-2290976772">
                    <tr className="jsx-2290976772">
                      <td className="jsx-2290976772 name">
                        <div className="jsx-2290976772 bold-text">Price</div>
                      </td>
                      <td className="jsx-2290976772 regular">
                        <div className="jsx-2290976772 price">$349.99</div>
                      </td>
                      <td className="jsx-2290976772 member">
                        <div className="jsx-2290976772 price">$279.99</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="jsx-2708165770 disclamer-wrapper">
            <div className="jsx-3511425025 price-disclaimer">
              <img
                src="https://d7gh5vrfihrl.cloudfront.net/website/icons/bulb.png"
                className="jsx-3511425025"
              />
              <div className="jsx-3511425025 bold-text">
                These are average rates for service.
              </div>
              <div className="jsx-3511425025">
                Pricing will be confirmed once a technician is assigned to your
                requested appointment.
              </div>
            </div>
            <a
              href={"/book-a-service/service/phone-repair/"+selectedService["phone-repair"].id}
              className="jsx-3511425025"
            >
              Repair my device
            </a>
          </div>
        </div>
      );
    };

    let container = HomeAppliancesPricing();
    switch (pricingContainer) {
      case "1":
        container = HomeAppliancesPricing();
        break;

      case "2":
        container = TvMountingPricing();
        break;

      case "3":
        container = HandyManPricing();
        break;

      case "4":
        container = PhoneRepairPricing();
        break;

      default:
        break;
    }
    
    return container;
  };

  ScrollToTop();
  return (
    <div className="jsx-2838850976 pricing-wrapper">
      <h1 className="jsx-2838850976">Puls Services Pricing</h1>
      <div className="jsx-3752221477 selection-bar">
        <div id="tabs-container" className="jsx-3752221477 bar">
          <div
            onClick={(e) => {
              switchTabs(e, "1");
            }}
            className="jsx-881438180 item selected"
          >
            Home Appliances
          </div>
          <div
            onClick={(e) => {
              switchTabs(e, "2");
            }}
            className="jsx-881438180 item"
          >
            TV Mounting
          </div>
          <div
            onClick={(e) => {
              switchTabs(e, "3");
            }}
            className="jsx-881438180 item"
          >
            Handyman Services
          </div>
          <div
            onClick={(e) => {
              switchTabs(e, "4");
            }}
            className="jsx-881438180 item"
          >
            iPhone Repair
          </div>
        </div>
      </div>
      {loading? 
        <div style={{display: "flex", justifyContent: "center", padding: "20px"}}>
          <Loader /> 
        </div>
        : 
        PricingContainer() 
      }
    </div>
  );
};

export default PricingScreen;
