
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
import Navbar from "./components/Navbar";

function App() {
    const history = useHistory();
  return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
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
