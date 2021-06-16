import React, { useState } from 'react';
import '../../../styles/screens/footerScreens/company/faqScreen.scss';

import { Collapse } from 'antd';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { ScrollToTop } from './../../../utilities/index';
import { faqs } from '../../../data/faqScreenQuestionAnswersList';

const { Panel } = Collapse;

const FaqScreen = () => {
  ScrollToTop();

  // function callback(key) {
  //   console.log(key);
  // }

  const outerHeader = (accordianHeaderTitle) => {
    return (
      <div className='outerAccordianHeader sb'>
        <span>{accordianHeaderTitle}</span>
        <IoIosArrowDown className='dropdown-icon' size='25px' />
      </div>
    );
  };

  const innerHeader = (accordianHeaderTitle) => {
    return (
      <div className='innerAccordianHeader sb '>
        <span>{accordianHeaderTitle}</span>
        <div className='icon'>
          <AiOutlinePlus className='plus-icon' size='25px' />
          <AiOutlineMinus className='minus-icon' size='25px' />
        </div>
      </div>
    );
  };

  return (
    <div className='faqScreen container-60'>
      <h1>Got questions? We're here to help</h1>
      <p>
        Use the sections below to find answers to frequently asked questions. You’re also welcome to
        email us at <a href='mailto:support@puls.com'>support@puls.com</a>
      </p>
      <div className='container-y-100 faq'>
        <Collapse expandIconPosition='right'>
          {faqs &&
            faqs.map((faq) => (
              <Panel
                className='outer-collapse'
                header={outerHeader(faq.title)}
                key={`${faq.id}`}
                showArrow={false}
              >
                <Collapse accordion expandIconPosition='right'>
                  {faq.faqList &&
                    faq.faqList.map((f) => (
                      <Panel header={innerHeader(f.question)} key={`${f.id}`} showArrow={false}>
                        <p>{f.answer}</p>
                      </Panel>
                    ))}
                </Collapse>
              </Panel>
            ))}
        </Collapse>
      </div>
    </div>
  );
};

export default FaqScreen;
