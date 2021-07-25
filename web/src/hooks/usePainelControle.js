
import {createContext, useContext, useState} from "react"
const mockProdutos = [
    {id:12,nome:'jarro de surf'},
    {id:14,nome:'prancha de surf'},
]
const PainelDados = {
    clientes:[{
        email:"lindomar@mar",
        produtos:[mockProdutos[1]]
    },
        {
            email:"arlene@mar",
        }
    ],
    produtos:mockProdutos,
    clienteSelecionado:null
}
const PainelControleContext = createContext([PainelDados,()=>{}])

const PainelControleProvider = (props) =>{
    const [statePainel,setStatePainel] = useState(PainelDados)
    return(

        <PainelControleContext.Provider value={[statePainel,setStatePainel]}>
            {props.children}
        </PainelControleContext.Provider>
    )
}
export {PainelControleContext,PainelControleProvider}

