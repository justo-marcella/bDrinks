import './App.css';

import  Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainHome from './Components/MainHome/MainHome';
import GetDrinks from './Components/GetDrinks/GetDrinks';
// import {BrowserRouter as Router} from "react-router-dom"


function App() {
  return (
    <div className="App">
      {/* <Router> */}
        {/* <Header/>       */}
        {/* <MainHome/> */}
      {/* </Router> */}
      <GetDrinks/>
        <Footer/>
    </div>
  );
}

export default App;