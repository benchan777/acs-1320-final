// import logo from './logo.svg';
import './App.css';
import data from './metal.json';

import Heading from './Heading/Heading';
import MetalMeta from './MetalMeta/MetalMeta';
import Band from './Band/Band';
import Like from './Like/Like';

function App() {
  const bandList = data.map(band => {
    const { band_name, fans, formed, origin, split, style } = band;
    let isSplit;

    if (split === '-') {
      isSplit = false;
    } else {
      isSplit = true;
    }

    return (
      <Band
        key={band_name}
        name={band_name}
        formed={formed}
        origin={origin}
        fans={(fans * 1000).toLocaleString('en')}
        split={split}
        style={style}
        likeComponent={isSplit ? '' : <Like />}
      />
    );
  });

  return (
    <div className="App">
      <Heading />
      <MetalMeta />
      <div className='BandList'>
        {bandList}
      </div>
    </div>
  );
}

export default App;
