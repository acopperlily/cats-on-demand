import loadPele from '../../src/pele.webp';
import errorPele from '../../src/rolyPolyPele.webp'

const Message = ({ status }) => {

  let warning = status === 'loading' ? 'Loading...' : 'Something went wrong...';
  let style = status === 'loading' ? 'image__loading' : 'image';
  let image = status === 'loading' ? loadPele : errorPele;
  let alt = status === 'isLoading' ? 'The spinning head of a cute cow cat' : 'A cute cow cat lying on her back';

  return (
    <section className="image__container">
      <h2 className="image__message">{warning}</h2>
      <img src={image} alt={alt} className={style}/>
    </section>
  );
};

export default Message;
