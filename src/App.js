import './App.css';
import {
  BrowserRouter as Router,
  
  Route
  
} from "react-router-dom";

import R from './R'
import Registraion from './Registration'

function App() {
  return (
    <Router>
      
      <Route path="/" exact component={Registraion}></Route>
      <Route path="/R" exact component={R}></Route>

    </Router>
    
    
    
    
  );
}

export default App;
