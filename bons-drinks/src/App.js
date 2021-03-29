import './App.css';

import  Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// import MainHome from './Components/MainHome/MainHome';
// import GetDrinks from './Components/GetDrinks/GetDrinks';
import Sobre from './Components/Sobre/Sobre';
import Team from './Components/Team/Team';
// import {BrowserRouter as Router} from "react-router-dom"


function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Header className="header"/>      
        {/* <MainHome className="mainContents"/> */}
      {/* </Router> */}
      {/* <GetDrinks className="mainContents"/> */}
      {/* <Sobre className="mainContents"/> */}
      <Team className="mainContents"/>
        <Footer className="footer"/>
    </div>
  );
}

export default App;
