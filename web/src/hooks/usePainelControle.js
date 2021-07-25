
import {createContext, useContext, useState} from "react"

import localStoNames from '../assets/mylocalStorageNames.json'

let produtosStorage = JSON.parse(
        localStorage.getItem(localStoNames.lProdutos))
let clientesStorage = JSON.parse(
     localStorage.getItem(localStoNames.lClientes)
)
function referenciaDorProdutoStorageNosClientes(){
    clientesStorage.forEach((cliente)=>{
        if(!cliente.produtos){
            cliente.produtos=[]
        }
        for (let produto of cliente.produtos) {
            for (const produtosStorageElement of produtosStorage) {
                if(produto.id===produtosStorageElement.id){
                    produto=produtosStorageElement
                }
            }

        }

    })
}referenciaDorProdutoStorageNosClientes()



const mockProdutos = [
    {id:12,nome:'jarro de surf'},
    {id:14,nome:'prancha de surf'},
]
const mockClientes = [{
    email:"lindomar@mar",
    produtos:[mockProdutos[1]]
},
    {
        email:"arlene@mar",
    }
]


const PainelDados = {
    clientes:clientesStorage,
    produtos:produtosStorage,
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

