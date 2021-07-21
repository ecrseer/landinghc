
import './App.css';
import {useEffect} from "react";
import {
    Switch,
    Route,
    useHistory,
} from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Cadastrado from "./components/Cadastrado";
import Sucesso from "./components/Sucesso";
import SectionCards from "./components/SectionCards";

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
                      <Sucesso historia={history}/>
                  </Route>
                  <Route className="" path="/">
                      <Cadastro historia={history}/>
                  </Route>
              </Switch>


      </header>
        <section>
            <SectionCards/>

        </section>
      <footer>made with ❤️ by gjm</footer>
    </div>
  );
}

export default App;
