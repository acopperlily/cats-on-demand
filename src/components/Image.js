import React from 'react';

const Image = props => {
  const domain = 'https://cataas.com';
  
  return (
    <div className="imageContainer">
      <img src={domain + props.url} alt="cat" />
    </div>
  );
};

export default Image;