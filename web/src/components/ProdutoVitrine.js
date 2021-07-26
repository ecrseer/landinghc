import './ProdutoVitrine.css'
import localStoNames from "../assets/mylocalStorageNames.json";
import {useContext} from "react";
import {PainelControleContext} from "../hooks/usePainelControle";



const ProdutoVitrineGenerico = ({
                                index,produto})=> {
    const [statePainel,setStatePainel] = useContext(PainelControleContext)

    function cadastraLocalStorageEmemoria(produto){
        if(!statePainel.clienteSelecionado.produtos){
            setStatePainel({...statePainel,clienteSelecionado: {
                    ...statePainel.clienteSelecionado,
                    produtos:[]
                }})
        }
        const novaListaProdutos = statePainel.clienteSelecionado
            .produtos.push(produto)
        setStatePainel({...statePainel,clienteSelecionado: {
                ...statePainel.clienteSelecionado,
                produto:novaListaProdutos
            }})


        let clientesDB = JSON.parse(localStorage.getItem(
            localStoNames.lClientes))
        for (let i = 0; i < clientesDB.length; i++) {
            if(clientesDB[i].email===statePainel.clienteSelecionado.email){
                clientesDB[i]=statePainel.clienteSelecionado;
            }
        }

        localStorage.setItem(localStoNames.lClientes,JSON.stringify(clientesDB));

    }

    return(
        <div key={index}
             onClick={() => {
             }}
             className="produtoVt"
        >
            <div>{produto.nome}</div>
            <p>R${produto.preco}</p>
            <p>Qtd :{produto.qtd}</p>
            {statePainel.clienteSelecionado ?
                <>
                    <button onClick={() => cadastraLocalStorageEmemoria(produto)}>
                        +
                    </button>
                </>
                :
                <></>
            }
        </div>
    )
}
const ProdutosNaVitrine =
    ({ todosProdutos})=>(
        <>
            {todosProdutos?
                todosProdutos.length!==0?
                todosProdutos.map((produto,index)=>(
                    <ProdutoVitrineGenerico produto={produto} index={index}/>
                )):<></>
                :
                <>nenhum produto cadastrado na vitrine</>
            }
        </>
    )
const ProdutosNoCarrinhoDoCliente = ({clienteSelecionad})=>(
    clienteSelecionad.produtos?
        clienteSelecionad.produtos.length!==0?
        clienteSelecionad.produtos.map((produto,index)=>(
            <ProdutoVitrineGenerico produto={produto} index={index}/>
        )):<></>
        :
        <>esse cliente não comprou nada</>
)

export {
    ProdutosNoCarrinhoDoCliente,ProdutosNaVitrine};