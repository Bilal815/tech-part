import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ScrollToTop } from "../../utilities/index";

const ServiceQuestions = (props) => {
  ScrollToTop();

  const { data } = useSelector(rootState => rootState.servicesQnA);
  const [options, setOptions] = useState([]);
  const [currQues, setCurrQues] = useState(undefined);
  const [nextQues, setNextQues] = useState(undefined);
  const [questions, setQuestions] = useState({});
 
  useEffect(() => {
    const p = require("../../styles/screens/questionScreens/tvQuestions/index.css");
    let { question, service_id, service_name, service_option } = props.match.params;
    setQuestions(data[service_id][service_option]);
    setCurrQues(question.toString().toUpperCase());
  }, [props.match.params]);
  
  useEffect(() => {
    if (Object.keys(questions).length && currQues) {
      const quesTxt = Object.keys(questions[currQues]).at(0);
      console.log({
        options: questions[currQues][quesTxt]
      })
      setOptions(Object.values(questions[currQues][quesTxt]).map(option => ({
        title: option.value,
        price: option.price?.after,
        prevPrice: option.price?.before,
        discount: option.price?.discount,
      })))
      setNextQues(questions[currQues].jump);
    }
  }, [currQues, questions])

  const _handleNextQuestion = () => {
    setCurrQues(nextQues);
  }

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
                        <img src="https://puls.com/create-appointment/static/media/discount-icon-blue.a6312632.svg" alt="" />
                        <span>{question.discount}% off</span>
                      </span>
                    ) : (
                      ""
                    )}
                  </label>
                  {question.rightIcon ? (
                    <img className="img-single" src={question.rightIcon} alt="" />
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

  if (!Object.keys(questions).length || !currQues) {
    return 'Loading...';
  }

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
          questions={options}
          nextQuestion={_handleNextQuestion}
        />
        <CartBox
          title={"TV Mounting"}
        />
      </div>
    </div>
  );
};
export default ServiceQuestions;
