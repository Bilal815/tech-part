import React, { useState, useEffect } from "react";
import { ScrollToTop } from "../../utilities/index";
import axios from "axios";
import Loader from "../../components/loader/Loader";

const TvQuestions = (props) => {
  ScrollToTop();

  const [questions, _questions] = useState([]);
  const [nextQ, _nextQ] = useState("");
 
  useEffect(() => {
    const p = require("../../styles/screens/questionScreens/tvQuestions/index.css");
    let { question } = props.match.params
    updateQuestion(question);
  }, []);  
  
  const updateQuestion = (question) => {
    switch (question) {
      case "q1":
        _nextQ("q2");
        _questions([
          {
            title: "Fixed",
            price: "39",
            prevPrice: "78",
            discount: "50",
            rightIcon:
              "https://puls.com/create-appointment/images/tv-mounting/brackets/bracket_fixed.svg",
          },
          {
            title: "Tilting",
            price: "31",
            prevPrice: "62",
            discount: "50",
            rightIcon:
              "https://puls.com/create-appointment/images/tv-mounting/brackets/bracket_fixed.svg",
          },
          {
            title: "Fixed",
            price: "39",
            prevPrice: "78",
            discount: "50",
            rightIcon:
              "https://puls.com/create-appointment/images/tv-mounting/brackets/bracket_fixed.svg",
          },
          {
            title: "Full motion",
            price: "44",
            prevPrice: "88",
            discount: "50",
            rightIcon:
              "https://puls.com/create-appointment/images/tv-mounting/brackets/bracket_fixed.svg",
          },
          {
            title: "None - I already have a bracket",
            price: "",
            prevPrice: "",
            discount: "",
            rightIcon: "",
          },
        ])
        break;
      case "q2":
        _nextQ("q3");
        _questions([
          {
            title: "On The Wall",
          },
          {
            title: "Above a fireplace",
          },
        ])
        break;  
    
      default:
        break;
    }
  };

  const _handleNextQuestion = () => {
    let url = props.match.url
    url = url.substring(0,url.length-2) + nextQ
    props.history.push(url)
    updateQuestion(nextQ)
  }

  // const [tvSizes, _tvSizes] = useState([]);
  // const [loading, _loading] = useState(true);
  // const { service_id } = props.match.params;

  // const getTvSize = () => {
  //   axios.post('/api/service-appliances', {service_id:service_id}).then(res => {
  //     _tvSizes(res.data.response.detail.appliances);
  //     _loading(false);
  //   }).catch(res => {
  //     console.log('service-appliances api catch:', res);
  //   });
  // }

  const BoxListQuestionComponent = (props) => {
  
    return (
      <div className="question-comp-wrapper">
        {props.questions.map((question, key) => (
          <div key={key}>
            <div className="single-answer-component-wrapper">
              <div className="fade-on-mount normal-elemnt-active">
                <button
                  onClick={()=>props.nextQuestion()}
                  className="answer-content with-image">
                  <label>
                    {question.title}
                    {question.price ? (
                      <span className="price">+(${question.price})</span>
                    ) : (
                      ""
                    )}
                    {question.prevPrice ? (
                      <span className="price-with-line">
                        ${question.prevPrice}
                      </span>
                    ) : (
                      ""
                    )}
                    {question.discount ? (
                      <span className="discount-icon-badge">
                        <img src="https://puls.com/create-appointment/static/media/discount-icon-blue.a6312632.svg" />
                        <span>{question.discount}% off</span>
                      </span>
                    ) : (
                      ""
                    )}
                  </label>
                  {question.rightIcon ? (
                    <img className="img-single" src={question.rightIcon} />
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const CartBox = (props) => {

    
    return (
      <div>
        <div className="my-cart-desktop">
          <div className="my-cart-wrapper-not-fixed " />
          <div className="my-cart-wrapper ">
            <div className="my-cart-content-wrapper">
              <div className="my-cart-device-section-wrapper">
                <div className="my-cart-device-section-header">
                  <div className="my-cart-device-section-header-image-title">
                    <div>
                      <span>{props.title}</span>
                    </div>
                  </div>
                </div>
                <div className="services-aggregation-details-wrapper">
                  <h3>
                    <b>Up to 31"</b>
                  </h3>
                  <div className="services-aggregation-details">
                    <div className="aggregate-service">
                      <span className="service-name">TV Mounting </span>
                      <span className="service-price">
                        <b>$76</b>
                      </span>
                    </div>
                    <div className="aggregate-service">
                      <span className="service-name">Fixed Bracket </span>
                      <span className="service-price">
                        <b>$39</b>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="subtotal-container">
                  <span>Estimated</span>
                  <span className="my-cart-small-text-bold"> $115</span>
                </div>
                <div className="disclaimer-container">
                  <p>
                    Pricing shown here are average prices for your requested
                    service. Final service rates will be determined by the
                    technician assigned to your appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app-container2">
      <div className="content-container">
        <div className="chance-box-wrapper">
          <div>
            <p className="medium-font">Select Bracket Type</p>
          </div>
        </div>
        <BoxListQuestionComponent
          {...props}
          questions={questions}
          nextQuestion={_handleNextQuestion}
        />
        <CartBox
          title={"TV Mounting"}
        />
      </div>
    </div>
  );
};
export default TvQuestions;
