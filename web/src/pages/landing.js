
import './landing.css';
import {useEffect} from "react";


import {Route, Switch, useHistory,
    withRouter,useRouteMatch} from "react-router-dom";
import Cadastrado from "../components/Cadastrado";
import Sucesso from "../components/Sucesso";
import Cadastro from "../components/Cadastro";

const LandingPage = () =>{
    const history = useHistory();
    let match = useRouteMatch();

    useEffect(()=>{
        const dadosUsuario = localStorage.getItem('dadosUsuario')
        if(dadosUsuario){
            history.push(`${match.url}/cadastrado`)
        }else{
            history.push(`${match.url}/`)
        }
    },[])

    return (
        <>
            <header className="App-header">
                <p>
                    Receba as melhores ofertas no seu melhor email!
                </p>

                <Switch>

                    <Route className="" exact path={`${match.path}/cadastrado`}>
                        <Cadastrado/>
                    </Route>
                    <Route exact path={`${match.path}/sucesso`}>
                        <Sucesso historia={history}/>
                    </Route>
                    <Route className="" exact path={`${match.path}`}>
                        <Cadastro historia={history}/>
                    </Route>
                </Switch>


            </header>
            <section>


            </section>
            <footer>made with ❤️ by gjm</footer>
        </>
    )
}
export default LandingPage