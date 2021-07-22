import {withRouter,Link} from 'react-router-dom'
import './index.css'
import Cadastro from '../components/Cadastro';
import SectionCards from "../components/SectionCards";
import { Switch,Route} from 'react-router-dom';
const Index = () =>{
    return (
        <div className=" App-header main">
            <Switch>
                <Route exact path={"/entrar"}>
                    <Cadastro/>
                </Route>
                <Route exact path={"/"}>
                    <Cadastro/>

                </Route>
            </Switch>

            <SectionCards/>
            <Cadastro/>
        </div>)
}
export default Index;