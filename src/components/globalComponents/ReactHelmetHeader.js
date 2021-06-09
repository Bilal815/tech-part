import React from 'react';
import { Helmet } from 'react-helmet';

const ReactHelmetHeader = ({ title, link }) => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>{title && title}</title>
      <link rel='canonical' href={link && link} />
    </Helmet>
  );
};

export default ReactHelmetHeader;
