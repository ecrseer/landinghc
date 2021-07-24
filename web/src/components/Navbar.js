import {Link, useHistory} from 'react-router-dom';
import {Menu,Toolbar,MenuItem,AppBar} from '@material-ui/core'
import {useEffect, useState} from "react";
import './Navbar.css'
function limparSessao(){
    localStorage.removeItem('sessaoAtual')
}

const BotoesSessaoVazia = ()=>(
    <div>
        <Link to={`/logar`}> Entrar</Link>
        <Link to={`/entraradmin`}>Entrar(administrador)</Link>
        <Link to={`/ficarsabendo`} className="diminuirlink">Receba as melhores ofertas no seu email</Link>


    </div>
)

const Navbar=()=>{
    let history = useHistory()
    const [abrirMenu,setAbrirMenu] = useState(false)
    const [isLogado,setIsLogado] = useState(false)
    useEffect(()=>{
        const usuarioLogado = localStorage.getItem('sessaoAtual')
        if (usuarioLogado){
            setIsLogado(true)
        }else{
            setIsLogado(false)
        }

    },[])
    return(
        <AppBar position={"sticky"}>
            <Toolbar>
                <BotoesSessaoVazia/>
                {
                    isLogado?
                        <Link to={`/`} onClick={limparSessao}>Sair</Link>
                        : <></>
                }

               {/* <button onClick={()=>setAbrirMenu(!abrirMenu)}>
                    menu
                </button>
                <Menu open={abrirMenu}>
                    <MenuItem>1234</MenuItem>
                    <MenuItem>1234</MenuItem>
                </Menu>*/}

            </Toolbar>
        </AppBar>

    )
}
export default Navbar;