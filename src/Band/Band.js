import './Band.css';

function Band(props) {
  const { name, formed, origin, fans, likes, split } = props;

  let splitStatus;
  if (split === '-') {
    splitStatus = false;
  } else {
    splitStatus = true;
  }

  return (
    <div className='Band'>
      <h2>{name}</h2>
      <div>Formed: {formed}</div>
      <div>Origin: {origin}</div>
      <div>Fans: {fans}</div>
      <div>Split: {splitStatus ? split : 'This band has not split'}</div>
      <div>{likes}</div>
    </div>
  );
}

export default Band;
