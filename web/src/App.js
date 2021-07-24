
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
import SectionCards from "./components/SectionCards";
import Card from "./components/Card";
import Cadastro from "./components/Cadastro";
import LoginSignin from "./largecomponents/LoginSignin";

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
            <Route className="" exact path={`/inicioTeste`}>
                <div className=" App-header main">
                    <Index/>
                </div>
            </Route>
            <Route className={""} exact path={`/logar`}>
                <div className=" App-header main">
                <Cadastro msgBotao={'Criar conta'}/>
                <SectionCards/>
                    <Card/>
                </div>
            </Route>
            <Route className={""} exact path={`/entraradmin`}>
                <div className=" App-header main">
                    <LoginSignin isCadastro={false}/>
                    <SectionCards/>
                    <Card/>
                </div>
            </Route>
            <Route className={""} exact path={`/criaradmin`}>
                <div className=" App-header main">
                    <LoginSignin isCadastro={true}/>
                    <SectionCards/>
                    <Card/>
                </div>
            </Route>

            <Route className="" exact path={`/`}>
                <div className=" App-header main">
                    <Card/>
                    <div> Vitrine:
                    <SectionCards/>
                    </div>
                    <Card/>
                </div>
            </Route>

        </Switch>

    </div>
          <footer>made with ❤️ by gjm</footer>
  </BrowserRouter>

  );
}

export default App;
