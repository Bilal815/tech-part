import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../styles/screens/questionScreens/tvQuestions/index.css'


function formatQuestion(id, question) {
    const questionText = Object.keys(question)[0];
    const options = Object.keys(question[questionText]).reduce((acc, option) => {
        acc.push({
            name: option,
            ...question[questionText][option]
        });
        return acc;
    }, [])
    return {
        id,
        questionText,
        options,
    }
}
//Sidebar
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
                      <span></span>
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





const TvQuestions1 =(props)=>{

    const baseURL = "/api/checkout-qna";
    const [questionsData, setQuestionsData] = useState(null);
    const [category, setCategory] = useState(null)
    const [itemOfCategory, setItemOfCategory] = useState(null);
    const [question, setQuestion] = useState(null);
  
    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setQuestionsData(response.data);
      }).catch(console.error);
    }, []);

    const itemsForCategory = category ? questionsData[category]: null;
    const questions = itemOfCategory ? itemsForCategory[itemOfCategory] : {};

    useEffect(() => {
        if (itemOfCategory) {
            const questionId = Object.keys(questions).at(0);
            setQuestion(formatQuestion(questionId, questions[questionId]));
        }
        
    }, [itemOfCategory])

    if (!questionsData) return null;
    return(

        <div className="app-container2">
        <div className="content-container">
          <div className="chance-box-wrapper">
            <div>
              <p className="medium-font">Select Bracket Type</p>
            </div>
          </div>
       
      <div className="question-comp-wrapper">
        {Object.keys(questionsData).map(c => (
        <div>
              <div className="single-answer-component-wrapper">
                <div className="fade-on-mount normal-elemnt-active">
                  <button
                    onClick={() => setCategory(c)}
                    className="answer-content with-image">
                  {c}
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>

        <div className="question-comp-wrapper">
         {category ? Object.keys(itemsForCategory).map(i => (
        <div>
              <div className="single-answer-component-wrapper">
                <div className="fade-on-mount normal-elemnt-active">
                  <button
                    onClick={() => setItemOfCategory(i)}
                    className="answer-content with-image">
                  {i}
                  </button>
                </div>
              </div>
            </div>
          )):null}
          </div>
          <CartBox/>

        <div className="question-comp-wrapper">
          {
        question ? (<>
        <div className="chance-box-wrapper">
          <div>
            <p className="medium-font">{question.questionText}</p>
          </div>
          </div>
            <div>
              <div className="single-answer-component-wrapper">
                <div className="fade-on-mount normal-elemnt-active">
                {question.options.map((option,key) => <button
                    onClick={() => {
                    setQuestion(formatQuestion(option.jump, questions[option.jump]))}}
                    className="answer-content with-image">
                    <div key={key}>
                    <label>
                    </label>
                    </div>
                  {option.value}
                  </button>
                )}
                </div>
              </div>
            </div>

        </>) : null
      }
      </div>
    </div>
    </div>
  );
}

export default TvQuestions1;