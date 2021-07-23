import {Link, useHistory} from 'react-router-dom';
import {Menu,Toolbar,MenuItem,AppBar} from '@material-ui/core'
import {useState} from "react";
import './Navbar.css'

const Navbar=()=>{
    let history = useHistory()
    const [abrirMenu,setAbrirMenu] = useState(false)
    return(
        <AppBar position={"sticky"}>
            <Toolbar>
              <Link to={`/logar`}> Entrar</Link>
                <Link to={`/adminsignin`}>Entrar(administrador)</Link>
                <Link to={`/ficarsabendo`}>Receba as melhores ofertas no seu email</Link>
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