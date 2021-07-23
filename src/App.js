import './App.css';
import Tables from './Tables';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div >

      <Router>
        <Switch>
          <Route path="/">
            <Tables />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
