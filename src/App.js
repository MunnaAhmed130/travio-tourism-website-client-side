import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <h1>This is travel related website</h1>
      <Router>
        <Switch>
          <Router exact path='/'>
            <Home></Home>
          </Router>
          <Router path='/home'>
            <Home></Home>
          </Router>
          <Router path='*'>
            <NotFound></NotFound>
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
