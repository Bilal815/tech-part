import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollToTop } from "../../utilities/index";
import {useHistory} from 'react-router-dom';
import {
  selectServiceAppliance,
  selectServiceOption
} from '../../reduxStore/actions/servicesActions'
import { useParams } from 'react-router-dom'
import { services } from "../../reduxStore/constants/servicesConstants";
import axios from "axios";

const ServiceQuestions = (props) => {
  const history = useHistory();
  ScrollToTop();

  const { data } = useSelector(rootState => rootState.servicesQnA);
  const [options, setOptions] = useState([]);
  const [currQues, setCurrQues] = useState(undefined);
  const [questions, setQuestions] = useState({});
  const {
    serviceApplianceOptionsSelected,
    selectedServiceAppliance
  } = useSelector(state => state.servicesQnA);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchQnA(service_id, service_option) {
      const baseURL = `http://localhost:8000/api/checkout-qna/${service_id}/${service_option}`;

      try {
        const response = await fetch(baseURL);
        const data = (await response.json());

        setQuestions(data);
      } catch(error) {
        console.log(error.message)
      }
    }

    const p = require("../../styles/screens/questionScreens/tvQuestions/index.css");
    let { service_id, service_option,  } = props.match.params;
    setCurrQues('Q1');
    fetchQnA(service_id, service_option);
  }, [data, props.match.params]);
  
  useEffect(() => {
    // TODO: handle sections
    if (Object.keys(questions ?? {}).length && currQues) {
      const _question = questions[currQues];
      if (_question.options) {
        setOptions(() => _question.options.map(option => ({
          title: option.value,
          price: option.price?.after,
          prevPrice: option.price?.before,
          discount: option.price?.discount,
          jump: option.jump
      })));
      }
    }
  }, [currQues, questions])

  useEffect(() => {
    async function setServiceAppliance() {
      let { service_id, service_option } = props.match.params;
      try {
        const res = await axios.post('/api/service-appliances', {service_id: service_id})
        const appliances = res.data.response.detail.appliances
        
        console.log({ appliances })

        dispatch(selectServiceAppliance(
          appliances.find(appliance => (appliance.id).toString() === service_option.toString())
        ));
      } catch (error) {
        console.log('service-appliances api catch:', error);
      }
    }

    if (Object.keys(selectedServiceAppliance).length === 0) {
      setServiceAppliance();
    }
  }, [dispatch, props.match.params, selectedServiceAppliance])

  const _handleNextQuestion = (nextQues) => {
    if (nextQues) {
      setCurrQues(nextQues);
      return 
    }
    // DONE: handle if there is no next ques specified
    history.push('/checkout');
  }

  if (!Object.keys(questions ?? {}).length || !currQues) {
    // TODO: style loading
    return 'Loading...';
  }

  const questionTxt = questions[currQues].question;

  return (
    <div className="app-container2">
      <div className="content-container">
        <div className="chance-box-wrapper">
          <div>
            <p className="medium-font">{questionTxt}</p>
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

const BoxListQuestionComponent = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="question-comp-wrapper">
      {props.questions.map((question, key) => (
        <div key={key}>
          <div className="single-answer-component-wrapper">
            <div className="fade-on-mount normal-elemnt-active">
              <button
                onClick={() => {
                  dispatch(selectServiceOption(question));
                  props.nextQuestion(question.jump);
                }}
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
  const {
    serviceApplianceOptionsSelected,
    selectedServiceAppliance
  } = useSelector(state => state.servicesQnA);
  let { service_id, service_option, service_name } = useParams();

  console.log({
    selectedServiceAppliance,
    serviceApplianceOptionsSelected
  })

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
                    <span>{service_name}</span>
                  </div>
                </div>
              </div>
              <div className="services-aggregation-details-wrapper">
                <h3>
                  <b>{}</b>
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