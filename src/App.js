import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://corona-api.com/countries`)
      .then((stream) => stream.json())
      .then((results) => setData(results.data));
    
  });
  // let name = '';
  // if(data !== undefined) {
  //   name = data.region;
  // }
  return (
    <div className="App">
      <div className='items'>
        {
          data && data.map((dat) => {
            return (
              <div key={dat.name} className="item">
                <p style={{color: 'red'}}>{dat.name}</p>
                <span>@ndhanur hastatvac depqer: {dat.latest_data.confirmed}</span><br />
                <span>Aysorva hastatvac depqer: {dat.today.confirmed}</span><br />
                <span>Aroxjacacner: {dat.latest_data.recovered}</span><br />
                <span>Maher: {dat.latest_data.deaths}</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
export default App;
