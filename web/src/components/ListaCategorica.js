import {useContext} from "react";
import {PainelControleContext} from "../hooks/usePainelControle";

const ListaCategorica = ({itensLista,selecionaEmail})=>{
    const [statePainel,setStatePainel] = useContext(PainelControleContext)
    return(
        <ul>
            <p>Clientes</p>


            {statePainel?
                statePainel.clientes?
                    statePainel.clientes.map((cliente,index)=>
                        <li key={index}
                            onClick={()=>{
                            setStatePainel({...statePainel,
                            clienteSelecionado: cliente})
                            }
                        }>{cliente.email}</li>
                ): <></>
            :<></>}
        </ul>
    )
}

export default ListaCategorica;