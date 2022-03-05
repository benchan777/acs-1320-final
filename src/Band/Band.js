import './Band.css';

function Band(props) {
  const { name, formed, origin, fans, likes } = props;

  return (
    <div className='Band'>
      <h2>{name}</h2>
      <div>Formed: {formed}</div>
      <div>Origin: {origin}</div>
      <div>Fans: {fans}</div>
      <div>{likes}</div>
    </div>
  );
}

export default Band;
