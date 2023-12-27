// import logo from './logo.svg';
// import './App.css';
import {NavBar} from './Components/Header';
import { MainBackground } from './Components/MainBackground';
import { useState, useEffect } from 'react';
import { Locations } from './Components/Locations';
import { Attendance } from './Components/Attendance';
import { Accomodation } from './Components/Accomodation';
import { Gifts } from './Components/Gifts';
import { Carrusel } from './Components/Carrusel';
import { Final } from './Components/Final';

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200)

  useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);

  return (
    <div className="App" style={{ fontFamily: 'sans-serif' }}>
      <NavBar isMobile={isMobile}/>
      <MainBackground isMobile={isMobile}/>
      <Locations isMobile={isMobile}/>
      <Attendance isMobile={isMobile}/>
      <Accomodation isMobile={isMobile} />
      <Gifts isMobile={isMobile} />
      <Carrusel isMobile={isMobile} />
      <Final isMobile={isMobile} />
    </div>
  );
}

export default App;
