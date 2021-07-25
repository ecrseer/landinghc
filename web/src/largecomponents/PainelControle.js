import Card from "../components/Card";
import SectionCards from "../components/SectionCards";
import ListaCategorica from "../components/ListaCategorica";
import {useState} from "react";
import {PainelControleProvider} from "../hooks/usePainelControle";
import Cadastro from "../components/Cadastro";

import './PainelControle.css'
import LoginSignin from "./LoginSignin";

const CAMPOS_CADASTRO_CLIENTE=[
    {nome:'email',
        tipo:'email',
        placehold:'Seu email'},
    {nome:'senha',
        tipo:'password',
        placehold:'Digite sua senha'}
]
const PainelControle= ({useLogado}) => {
    const [emailSelecionado,setEmailSelecionado] = useState('')
    const [criarCliente,setCriarCliente] = useState(false)

    const useLogar = useLogado? useLogado : ()=>[false,()=>{}]

    const [isLogado,setIsLogado] = useLogar()

    function putEmailSelecionado(email){
        setEmailSelecionado(email)
    }

    const MockPaginaInicial=()=>(
        <>
            <Card/>
            <SectionCards/>
            <Card/>
        </>
    )

    return(
        {isLogado ?
        <MockPaginaInicial/>
                :
                <PainelControleProvider className="App-header main">
                    {criarCliente?
                        <Cadastro msgBotao={'Cadastrar'}
                                  storageDoCadastro={'dadosClientes'}
                                  isCadastro={true}
                                  camposAdicionais={CAMPOS_CADASTRO_CLIENTE}/>
                        :
                        <Card/>}
                    <div> Vitrine:
                        <SectionCards/>
                    </div>
                    <div>
                        <button className="btnpadrao" onClick={()=>{setCriarCliente(!criarCliente)}}>
                            Criar/Editar cliente</button>
                        <ListaCategorica selecionaEmail={putEmailSelecionado}/>
                    </div>

                </PainelControleProvider>
        }
    )
}

export default  PainelControle;