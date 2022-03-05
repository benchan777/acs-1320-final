import './Band.css';

function Band(props) {
  const { name, formed, origin, fans, likeComponent, split, style } = props;

  let splitStatus;
  if (split === '-') {
    splitStatus = false;
  } else {
    splitStatus = true;
  }

  const styleArray = style.split(',').map(obj => {
    return (
      <li key={obj}>
        {obj}
      </li>
    )
  })

  return (
    <div className='Band'>
      <h2>{name}</h2>
      <div>Formed: {formed}</div>
      <div>Origin: {origin}</div>
      <div>Fans: {fans}</div>
      <div>Split: {splitStatus ? split : 'This band has not split'}</div>
      <div className='Styles'>
        {styleArray}
      </div>
      <div>{likeComponent}</div>
    </div>
  );
}

export default Band;
