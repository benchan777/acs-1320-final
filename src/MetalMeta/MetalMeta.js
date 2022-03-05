import data from '../metal.json';
import './MetalMeta.css';

function MetalMeta() {
  const numberOfBands = data.length;

  return (
    <div className='MetalMeta'>
      <div>Total Bands: {numberOfBands}</div>
      <div>Total Fans: {(data.map(band => band.fans).reduce((a, b) => a + b) * 1000).toLocaleString('en')}</div>
    </div>
  );
}

export default MetalMeta;