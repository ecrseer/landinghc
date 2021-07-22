import {withRouter,Link} from 'react-router-dom'
import './index.css'
import Cadastro from '../components/Cadastro';
import SectionCards from "../components/SectionCards";
const Index = () =>{
    return (
        <div className=" App-header main">
            <Cadastro/>
            <SectionCards/>
        </div>)
}
export default Index;