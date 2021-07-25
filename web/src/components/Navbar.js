import {Link, useHistory} from 'react-router-dom';
import {Menu,Toolbar,MenuItem,AppBar} from '@material-ui/core'
import {useEffect, useState} from "react";
import './Navbar.css'


const BotoesSessaoVazia = ()=>(
    <div>
        <Link to={`/logar`}> Clientes</Link>
        <Link to={`/entraradmin`}>ADMilsons</Link>
        <Link to={`/ficarsabendo`} className="diminuirlink">Receba as melhores ofertas no seu email</Link>


    </div>
)

const Navbar=({useLogado})=>{


    let history = useHistory()
    const [abrirMenu,setAbrirMenu] = useState(false)
    const [isLogado,setIsLogado] = useLogado()


    function limparSessao(){
        localStorage.removeItem('sessaoAtual')
        history.push("/")
        setIsLogado(false)
    }

    return(
        <AppBar position={"sticky"}>
            <Toolbar>

                {
                    isLogado?
                        <Link to={`/`} onClick={limparSessao}>Sair</Link>
                        : <BotoesSessaoVazia/>
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