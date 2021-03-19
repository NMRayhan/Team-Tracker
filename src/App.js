import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamDetails from './Component/TeamDetails/TeamDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/home"><Home></Home></Route>
        <Route path="/teams/:teamID"><TeamDetails></TeamDetails></Route>
        <Route path="*"><Home></Home></Route>
      </Switch>
    </Router>
  );
}

export default App;
