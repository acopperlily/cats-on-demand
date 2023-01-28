import React from 'react';
import errorPele from '../../src/errorPele.jpg';
import loadPele from '../../src/pele.png';

const Image = props => {
  console.log('image props:', props);
  const domain = 'https://cataas.com';

  let path = domain + props.url;
  let warning;
  let style = 'image';

  if (props.isLoading) {
    path = loadPele;
    warning = 'Loading...';
    style = 'loading';
  } else if (props.error) {
    path = errorPele;
    warning = 'Something went wrong...';
    style = 'error';
  }

  const load = <img src={loadPele} className='loading' />;
  const cat = <img src={path} className='image' />;

  return (
    <div className="imageContainer" >
      {(props.isLoading || props.error) && <h4>{warning}</h4>}
      {/* {props.isLoading && load}
      {props.url && cat} */}
      <img src={path} alt='cat' className={style} />
    </div>
  );
};

export default Image;