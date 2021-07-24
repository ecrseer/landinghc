import {useContext} from "react";
import {PainelControleContext} from "../hooks/usePainelControle";

const ListaCategorica = ({itensLista,selecionaEmail})=>{
    const [statePainel,setStatePainel] = useContext(PainelControleContext)
    return(
        <ul>
            <p>Clientes</p>
            <li onClick={()=>{
                setStatePainel(
                    {...statePainel,clientes:[{email:'raimunda'}]} )
            } } >joao {
                statePainel.clientes[0].email ? statePainel.clientes[0].email
                    : 'veio nao'
            }</li>
            <li onClick={selecionaEmail}>joao</li>
            <li onClick={selecionaEmail}>joao</li>
        </ul>
    )
}
export default ListaCategorica;