
import { useState } from 'react';
import './App.css';

function App() {

  const [getTime, setTime] = useState(new Date().toLocaleTimeString())

  const timeSplit = getTime.split(":")
  const secSplit = timeSplit[2].split(' ')
  timeSplit.splice(2, 1)

  const time = timeSplit.concat(secSplit)
  let [hour, min, sec, phase] = time
  
  if(hour < 10){
    hour = '0'+hour
  }

  function updateTime() {
    let t = new Date().toLocaleTimeString()
    setTime(t)
  }
  setInterval(updateTime, 1000)
  return (
    <div className="App">
      <div className="wrapper">
        <div className="timelist">
          <div className="time hour-side"><h1>{hour}</h1><p className="details">{phase}</p>
           </div>
          <div className="time minute-side"><h1>{min}</h1>
          <p className="details">{sec}</p>
          </div>
          </div>
        </div>

      </div>
  );
}

export default App;
