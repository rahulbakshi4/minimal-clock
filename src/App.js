
import { useState } from 'react';
import './App.css';
import Moon from '../src/images/moon.png'
import Sun from '../src/images/sun.png'

function App() {

  const [getTime, setTime] = useState(new Date().toLocaleTimeString())

  const timeSplit = getTime.split(":")
  const secSplit = timeSplit[2].split(' ')
  timeSplit.splice(2, 1)

  const time = timeSplit.concat(secSplit)
  let [hour, min, sec, phase] = time
  
  if(hour < 10 && hour.length ===1){
    hour = '0'+hour
  }

  function updateTime() {
    let t = new Date().toLocaleTimeString()
    setTime(t)
  }
  const darktheme = ['bgDark','isdark']
   const lighttheme = ['bgLight','islight']
  const [theme,setTheme] = useState(darktheme)
  const[themeBtnDark,setThemeBtnDark] = useState('none')
  const[themeBtnLight,setThemeBtnLight] = useState('block')

  function darkBtnHandler(){
    setThemeBtnDark('none')
    setTheme(darktheme)
    setThemeBtnLight('block')
    
  }
  function lightBtnHandler(){
    setThemeBtnLight("none")
    setTheme(lighttheme)
    setThemeBtnDark("block")  
   }
  
  setInterval(updateTime, 1000)
  return (
   
    <div className={`App ${theme[0]}`} style ={{transition:"1s ease-in"}}>
     {/* <Navbar/> */}
     <nav>
       <button style={{display:themeBtnDark}} onClick={darkBtnHandler}>
         <img src={Moon} alt="" />
       </button>
       <button style={{display:themeBtnLight}} onClick={lightBtnHandler}>
        <img src={Sun} alt="" />
       </button>
     </nav>
      <div className="wrapper">
        <div className="timelist">
          <div style={{transition:"1s ease-in"}} className={`time hour-side ${theme[1]}`}><h1>{hour}</h1><p className="details">{phase}</p>
           </div>
          <div style={{transition:"1s ease-in"}} className={`time minute-side ${theme[1]}`}><h1>{min}</h1>
          <p className="details">{sec}</p>
          </div>
          </div>
        </div>

      </div>
  );
}

export default App;
