
import {withRouter, Link, useRouteMatch} from 'react-router-dom'
import './index.css'
import Cadastro from '../components/Cadastro';
import SectionCards from "../components/SectionCards";
import Card from '../components/Card'
import { Switch,Route} from 'react-router-dom';
const Index = () =>{
    let match = useRouteMatch();
    return (
        <>
     {/*nao funcionou*/}
        <div className=" App-header main">

            <Switch>
                <Route className=""
                       exact path={`${match.path}/`}>
                    <Card/>
                </Route>

                <Route className=""
                   exact path={`${match.path}/entrar`}>
                    <Cadastro/>
                </Route>
            </Switch>

            <SectionCards/>
        </div>

        </>)
}
export default Index;