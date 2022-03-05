import data from '../metal.json';

function MetalMeta() {
  const numberOfBands = data.length;
  const fansArray = data.map(band => {
    const { fans } = band;
    return fans
  });

  return (
    <div className='MetalMeta'>
      <div>Total Bands: {numberOfBands}</div>
      <div>Total Fans: {(fansArray.reduce((a, b) => a + b, 0) * 1000).toLocaleString('en')}</div>
    </div>
  );
}

export default MetalMeta;