import React from 'react';
import '../../styles/components/globalComponents/howItWorks.scss';

const HowItWorks = ({ bgImage, title, howItWorksPoints }) => {
  const GreenGradient = () => {
    return <div className='greenGradient'></div>;
  };
  return (
    <div
      className='howItWorks'
      style={{
        backgroundImage: `url(${
          bgImage ? bgImage : 'https://d7gh5vrfihrl.cloudfront.net/website/whyus/whyus.jpg'
        })`,
      }}
    >
      <div className='container-75'>
        <div className='points-wrapper'>
          {title && title.split(',').map((t, i) => <h1 key={i}>{t ? t : 'How it works'}</h1>)}
          <div className='points'>
            {howItWorksPoints &&
              howItWorksPoints.map((p, i) => (
                <div key={i} className='point'>
                  <GreenGradient />
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
