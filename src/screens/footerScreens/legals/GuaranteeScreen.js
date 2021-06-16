import React, { useState } from 'react';
import '../../../styles/screens/footerScreens/legals/guaranteeScreen.scss';

import { ScrollToTop } from './../../../utilities/index';
import { data } from '../../../data/guaranteeScreenData';

const GuaranteeScreen = () => {
  ScrollToTop();

  return (
    <div className='guaranteeScreen'>
      <div className='container-40'>
        {data &&
          data.map((item) => (
            <>
              {item.mainHeading && <h1 className='heading-1 center'>{item.mainHeading}</h1>}
              <div className='terms'>
                {item.mainDescription && <p className='description '>{item.mainDescription}</p>}

                {item.details &&
                  item.details.map((term) => (
                    <>
                      {term.innerHeading && (
                        <h1 className='heading-3 center my-5'>{term.innerHeading}</h1>
                      )}

                      {term.included && <h1 className='heading-3'>{term.included.heading}</h1>}
                      <ul>
                        {term.included.descriptionList &&
                          term.included.descriptionList.map((i) => <li>{i}</li>)}
                      </ul>

                      {term.notIncluded && <h1 className='heading-3'>{term.included.heading}</h1>}
                      <ul>
                        {term.notIncluded.descriptionList &&
                          term.notIncluded.descriptionList.map((i) => <li>{i}</li>)}
                      </ul>
                      {term.boldDescription && (
                        <h1 className='heading-3 my-5'>{term.boldDescription}</h1>
                      )}
                    </>
                  ))}
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default GuaranteeScreen;
