import React from 'react';
import errorPele from '../../src/errorPele.jpg';

const Image = props => {
  const domain = 'https://cataas.com';

  let path = domain + props.url;

  if (props.error) path = errorPele;


  return (
    <div className="imageContainer" >
      <img src={path} alt="cat" />
    </div>
  );
};

export default Image;