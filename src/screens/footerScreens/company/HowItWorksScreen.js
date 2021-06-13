import React from 'react';
import '../../../styles/screens/footerScreens/company/howItWorksScreen.scss';
import { ScrollToTop } from './../../../utilities/index';

import { Button } from '../../../styledComponents/index';
import GetStarted2 from '../../../components/globalComponents/GetStarted2';

const HowItWorksScreen = ({ history }) => {
  ScrollToTop();
  return (
    <div className='howItWorksScreen'>
      <div className='landing-page center'>
        <h1 className='heading-1'>How Puls works</h1>
        <p>Seamless digital services at your door</p>
      </div>
      <div className='container-75 container-y-50'>
        <div className='df my-5'>
          <div className='image'>
            <img
              src='https://d7gh5vrfihrl.cloudfront.net/website/how-process/process-1.png'
              alt=''
            />
          </div>
          <div className='content'>
            <div className='green-heading'>
              <img
                src='https://d7gh5vrfihrl.cloudfront.net/website/how-process/point-1.svg'
                alt=''
              />
              <h1>
                Tell us how <br /> we can help
              </h1>
            </div>
            <p>
              Our website makes it easy to tell us <br /> what device you have, and what <br />{' '}
              service you need.
            </p>
          </div>
        </div>
        <div className='df my-5'>
          <div className='content'>
            <div className='green-heading'>
              <img
                src='https://d7gh5vrfihrl.cloudfront.net/website/how-process/point-2.svg'
                alt=''
              />
              <h1>
                Confirm a time <br />
                and location
              </h1>
            </div>
            <p>
              We come to you, whenever you're <br /> ready, often in under an hour
            </p>
          </div>
          <div className='image'>
            <img
              src='https://d7gh5vrfihrl.cloudfront.net/website/how-process/process-2.png'
              alt=''
            />
          </div>
        </div>
        <div className='df my-5'>
          <div className='image'>
            <img
              src='https://d7gh5vrfihrl.cloudfront.net/website/how-process/process-3.png'
              alt=''
            />
          </div>
          <div className='content'>
            <div className='green-heading'>
              <img
                src='https://d7gh5vrfihrl.cloudfront.net/website/how-process/point-3.svg'
                alt=''
              />
              <h1>
                Get on with <br /> your life
              </h1>
            </div>
            <p>
              Our expert techs bring the parts and <br /> skills to complete each job on the <br />{' '}
              spot. No need to ship your device, <br /> drive to a store or wait in line.
            </p>
          </div>
        </div>
        <div className='df my-5'>
          <div className='content mr-3'>
            <div className='green-heading'>
              <img
                src='https://d7gh5vrfihrl.cloudfront.net/website/how-process/point-4.svg'
                alt=''
              />
              <h1>
                Breathe <br /> easy
              </h1>
            </div>
            <p>
              We give you clear, upfront pricing.
              <br />
              You pay after the job is done, with <br /> cash or credit card. Simple!
            </p>
          </div>
          <div className='image'>
            <img
              src='https://d7gh5vrfihrl.cloudfront.net/website/how-process/process-4.png'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='questions-wrapper center'>
        <h1>Question? We have answers</h1>
        <Button onClick={() => history.push('/faq')}>Visit Our</Button>
      </div>

      <div className='container-y-100'>
        <GetStarted2
          bgImage='https://d7gh5vrfihrl.cloudfront.net/website/backgrounds/background-getstarted-old.jpg'
          title='Ready to get started?'
          btnTitle='Book a Service'
          btnUrl='/'
        />
      </div>
    </div>
  );
};

export default HowItWorksScreen;
