import {useContext} from "react";
import './ListaCategorica.css'
import {PainelControleContext} from "../hooks/usePainelControle";

const ListaCategorica = ({itensLista})=>{
    const [statePainel,setStatePainel] = useContext(PainelControleContext)

    return(
        <div className="clienteselecionado">
            <header>

            </header>
            <main>
                <ul>
                    <p>Clientes</p>


                    {statePainel?
                        statePainel.clientes?
                            statePainel.clientes?.map((cliente,index)=>
                                <li key={index}
                                    onClick={()=>{
                                        let selecao=null
                                        if(!statePainel.clienteSelecionado){
                                            selecao=cliente
                                        }
                                        setStatePainel({...statePainel,
                                            clienteSelecionado: selecao})
                                    }
                                    }
                                    className={'.clienteselecionado'}
                                >{cliente.email}</li>
                            ): <></>
                        :<></>}
                </ul>
            </main>
        </div>
    )
}

export default ListaCategorica;