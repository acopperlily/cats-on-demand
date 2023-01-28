import React from 'react';
import errorPele from '../../src/errorPele.jpg';
import loadPele from '../../src/pele.png';

const Image = props => {
  const domain = 'https://cataas.com';

  let path = domain + props.url;

  if (props.error) path = errorPele;
  if (props.isLoading) path = loadPele;


  return (
    <div className="imageContainer" >
      <img src={path} alt="cat" />
    </div>
  );
};

export default Image;