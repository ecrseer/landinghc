
import './App.css';


import {
    Switch,
    Route,
    BrowserRouter,
    useHistory,
    Link,
} from "react-router-dom";
import Landing from './pages/landing';
import Index from './pages/index';

import Store from './pages/store';

function App() {
    const history = useHistory();
  return (
      <BrowserRouter>
      <div className="App">
        <Link to="/ficarsabendo">links e botoes</Link>
        <Switch>
            <Route className="" path="/ficarsabendo">
                <Landing/>
            </Route>
            <Route className="" exact path={`/`}>
                <Index/>
            </Route>
        </Switch>

    </div>
          <footer>made with ❤️ by gjm</footer>
  </BrowserRouter>

  );
}

export default App;
