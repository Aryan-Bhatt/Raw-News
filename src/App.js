
import './App.css';

import Navbar from './components/Navbar';
import Display from './components/Display';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";

const App=()=> {
  
    return (
    <>
    <Router>
    <Navbar name="RawNews"/>
    <Switch>

    <Route exact path="/">
    <Display cat="general" key="general"/>
    </Route>


    <Route exact path="/general">
    <Display cat="general" key="general"/>
    </Route>

    <Route exact path="/sports">
    <Display cat="sports" key="sports"/>
    </Route>

    <Route exact path="/science" key="science">
    <Display cat="science"/>
    </Route>

    <Route exact path="/health">
    <Display cat="health" key="health"/>
    </Route>

    <Route exact path="/entertainment">
    <Display cat="entertainment" key="entertainment"/>
    </Route>

    <Route exact path="/technology">
    <Display cat="technology" key="technology"/>
    </Route>
    <Route exact path="/business">
    <Display cat="business" key="business"/>
    </Route>



    </Switch>
    </Router>
    </>
    )
  
}

export default App;


 