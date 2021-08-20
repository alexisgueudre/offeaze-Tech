import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './pages/Home';
import coworking from "./pages/coworking";

function App() {
  return (
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Switch>
            <Route path="/coworking" exact component={coworking} />
          </Switch>
        </Router>
  );
}

export default App;
