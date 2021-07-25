
import {createContext, useContext, useState} from "react"
const PainelDados = {
    clientes:[{
        email:"lindomar@mar",
        produtos:[{nome:'prancha de surf'}]
    },
        {
            email:"arlene@mar",
            produtos:[{nome:'jarro de surf'}]
        }
    ],
    produtos:[],
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

