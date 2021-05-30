import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './home';
import Login from './login';
import Aboutus from './aboutus';
import Search from './search';
import Services from './services';

function App() {

    return (
        <Router>
            <div className="App" >
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
            </div >
        </Router>
    );
}

export default App;