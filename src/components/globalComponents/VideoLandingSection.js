import React from 'react';
import '../../styles/components/globalComponents/videoLandingSection.scss';

import { LinkButton } from '../../styledComponents';

const VideoLandingSection = ({ videoUrl, imageUrl, title, description, btnTitle, btnLink }) => {
  return (
    <div className='videoLandingSection' style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className='video-player-wrapper'>
        {/* <video src={videoUrl} autoPlay loop muted></video> */}
        {title && <h1>{title}</h1>}
        {description && <h4>{description}</h4>}
        <LinkButton link={btnLink} name={btnTitle} />
      </div>
    </div>
  );
};

export default VideoLandingSection;
