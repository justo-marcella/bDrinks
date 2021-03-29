import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import  Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainHome from './Components/MainHome/MainHome';
import GetDrinks from './Components/GetDrinks/GetDrinks';
import Sobre from './Components/Sobre/Sobre';
import Team from './Components/Team/Team';
import Contato from './Components/FormContato/Contato';



function App() {
  return (
    <div className="App">
      <Router>
        <header>
        <Header className="header"/>      
        </header>
        <main>
          <Switch>
            <Route path="/drinks">
              <GetDrinks className="mainContents"/>
            </Route>
            <Route path="/sobre-nos">
              <Sobre className="mainContents"/>
            </Route>
            <Route exact path="/">
              <MainHome className="mainContents"/>
            </Route>
            <Route path="/nosso-time">
              <Team className="mainContents"/>
            </Route>
            <Route path="/contato">
              <Contato className="mainContents"/>
            </Route>
          </Switch>
        </main>
        <footer>
        <Footer className="footer"/>  
        </footer>  
      </Router> 
    </div>
  );
}

export default App;
