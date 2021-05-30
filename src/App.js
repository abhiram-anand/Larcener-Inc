import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from ".//pages/home";
import Login from ".//pages/login";
import Aboutus from ".//pages/aboutus";
import Search from ".//pages/search";
import Services from ".//pages/services";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/aboutus">
            <Aboutus />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
