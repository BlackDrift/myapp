import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home";
import Pokemon from "./pages/pokemon";
import Pokedex from "./pages/pokedex";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//App.js
function App(props){
  return <Router>
      <Switch>
        <Route exact path="/"> 
          <Home /> 
        </Route>
        <Route path="/pokemon">
          <Pokemon />
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
      </Switch>
  </Router>
}


export default App;