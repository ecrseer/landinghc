
import Cadastro from "../components/Cadastro";
import {Link} from "react-router-dom";
import './LoginSignin.css'

const CAMPOS_LOGIN_ADMIN=[
    {nome:'senha',
        tipo:'password',
        placehold:'Digite sua senha'}
]
const BotaoCadastrese = () =>(
    <section>
        <p>Nao tem conta? cadastre-se aqui</p>
        <Link to={`/criaradmin`} className="btnpadrao">
            Se cadastre
        </Link>
    </section>
)

const LoginSignin=({isCadastro})=>{

    return(
        <div className="formulariologin">
            <h1>{isCadastro ? 'Cadastre-se ': 'Entre '}</h1>
            <Cadastro msgBotao={'Entrar'} isLoginAdmin={true}
                      isCadastro={isCadastro}
                      camposAdicionais={CAMPOS_LOGIN_ADMIN}/>
            {isCadastro? <></>:<BotaoCadastrese/>}
        </div>
    )
}
export default LoginSignin;