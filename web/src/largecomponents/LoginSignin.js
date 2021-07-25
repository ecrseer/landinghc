
import Cadastro from "../components/Cadastro";
import {Link} from "react-router-dom";
import './LoginSignin.css'

const CAMPOS_LOGIN_ADMIN=[
    {nome:'email',
        tipo:'email',
        placehold:'Seu email'},
    {nome:'senha',
        tipo:'password',
        placehold:'Digite sua senha'}

]
const BotaoCadastrese = () =>(
    <section>
        <p>Nao tem conta? cadastre-se aqui</p>
        <div>
            <Link to={`/criaradmin`} className="btnpadrao">
                Cadastrar
            </Link>
        </div>

    </section>
)

const LoginSignin=({isCadastro,useLogado})=>{

    return(
        <div className="formulariologin">
            <h1>{isCadastro ? 'Cadastre-se ': 'Entre '}</h1>
            <Cadastro msgBotao={'Entrar'} isLoginAdmin={true}
                      storageDoCadastro={'dadosAdmin'}
                      isCadastro={isCadastro}
                      camposAdicionais={CAMPOS_LOGIN_ADMIN}
                      useLogado={useLogado}
            />
            {isCadastro? <></>:<BotaoCadastrese/>}
        </div>
    )
}
export default LoginSignin;