
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
import PainelControle from "./largecomponents/PainelControle";
import {useEffect, useState} from "react";

function App() {
    const [isLogado,setIsLogado] = useState(false)
    useEffect(()=>{
        const usuarioLogado = localStorage.getItem('sessaoAtual')
        if (usuarioLogado){
            setIsLogado(true)
        }else{
            setIsLogado(false)
        }

    },[])
    function handleIsLogado(){
        return [isLogado,setIsLogado]
    }

    const history = useHistory();
  return (
      <BrowserRouter>
      <div className="App">
        <Navbar useLogado={handleIsLogado}/>
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
                    <LoginSignin isCadastro={false} useLogado={handleIsLogado}/>
                    <SectionCards/>
                    <Card/>
                </div>
            </Route>
            <Route className={""} exact path={`/criaradmin`}>
                <div className=" App-header main">
                    <LoginSignin isCadastro={true} />
                    <SectionCards/>
                    <Card/>
                </div>
            </Route>

            <Route className="" exact path={`/`}>
                <div className=" App-header main">
                    <PainelControle useLogado={handleIsLogado}/>
                </div>
            </Route>

        </Switch>

    </div>
          <footer>made with ❤️ by gjm</footer>
  </BrowserRouter>

  );
}

export default App;
