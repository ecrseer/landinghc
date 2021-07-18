
import './App.css';
import {useEffect, useState} from "react";
import {

    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Cadastrado from "./components/Cadastrado";
import Sucesso from "./components/Sucesso";

function App() {
    const history = useHistory();
    useEffect(()=>{
        const dadosUsuario = localStorage.getItem('dadosUsuario')
        if(dadosUsuario){
            history.push("/cadastrado")
        }else{
            history.push("/")
        }
    },[])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Receba as melhores ofertas no seu melhor email!
        </p>

              <Switch>
                  <Route className="" path="/cadastrado">
                      <Cadastrado/>
                  </Route>
                  <Route path="/sucesso">
                      <Sucesso/>
                  </Route>
                  <Route className="" path="/">
                      <Cadastro history={history}/>
                  </Route>
              </Switch>


      </header>
        <section>

        </section>
      <footer>made with ❤️ by gjm</footer>
    </div>
  );
}

export default App;
