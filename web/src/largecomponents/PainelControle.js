import Card from "../components/Card";
import SectionCards from "../components/SectionCards";
import ListaCategorica from "../components/ListaCategorica";
import {useState} from "react";
import {PainelControleProvider} from "../hooks/usePainelControle";
import Cadastro from "../components/Cadastro";
import localStoNames from '../assets/mylocalStorageNames.json'
import './PainelControle.css'
import LoginSignin from "./LoginSignin";

const CAMPOS_CADASTRO_CLIENTE=[
    {nome:'email',
        tipo:'email',
        placehold:'Seu email'},
    {nome:'endereco',
        tipo:'text',
        placehold:'Endereco'},
    {nome:'senha',
        tipo:'password',
        placehold:'Senha'}
]
const CAMPOS_CADASTRO_PRODUTO=[
    {nome:'preco',
        tipo:'text',
        placehold:'Preço'},
    {nome:'qtd',
        tipo:'number',
        placehold:'Quantidade'},
]
const PainelControle= ({useLogado}) => {

    const [criarCliente,setCriarCliente] = useState(false)
    const [criarProduto,setCriarProduto] = useState(false)
    const useLogar = useLogado? useLogado : ()=>[false,()=>{}]

    const [isLogado,setIsLogado] = useLogar()

    const MockPaginaInicial=()=>(
        <>
            <Card/>
            <SectionCards/>
            <Card/>
        </>
    )

    return(
        <>
            {!isLogado ?
                <MockPaginaInicial/>
                :
                <PainelControleProvider className="App-header main">
                    {criarCliente?
                        <Cadastro msgBotao={'Cadastrar'}
                                  storageDoCadastro={localStoNames.lClientes}
                                  isCadastro={true}
                                  camposAdicionais={CAMPOS_CADASTRO_CLIENTE}/>
                        :
                        <div className="">
                        <button className="btnpadrao" onClick={()=>{setCriarProduto(!criarProduto)}}>
                            {criarProduto?'Voltar':'Criar Produto'}</button>

                            <Card/>
                        </div>
                    }


                    <div>
                        <SectionCards isLogado={isLogado}/>

                    </div>


                    {criarProduto?
                        <Cadastro msgBotao={'Cadastrar'}
                                  storageDoCadastro={localStoNames.lProdutos}
                                  isCadastro={true}
                                  camposAdicionais={CAMPOS_CADASTRO_PRODUTO}/>
                        :
                        <div className="listaClientes">
                        <button className="btnpadrao" onClick={() => {
                            setCriarCliente(!criarCliente)
                        }}>
                            {criarCliente? 'Voltar' : 'Criar/Editar cliente'}
                        </button>
                        <ListaCategorica/>
                    </div>}

                </PainelControleProvider>
            }
        </>
    )
}



export default  PainelControle;