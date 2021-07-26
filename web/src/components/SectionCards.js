import {useContext, useEffect, useState} from "react";
import Card from "./Card"
import './SectionCards.css'
import {PainelControleContext} from "../hooks/usePainelControle";
import localStoNames from '../assets/mylocalStorageNames.json'
import {ProdutosNaVitrine,ProdutosNoCarrinhoDoCliente}
    from "./ProdutoVitrine";

const SectionCards = ({isLogado})=>{
    const MockCards=()=>(
        <>
            <Card/>
            <Card/>
            <Card/>
        </>
    )
    const [statePainel,setStatePainel] = useContext(PainelControleContext)


    useEffect(()=>{

    },[statePainel])
    return(
        <div className="SectionCards">
            {statePainel.clienteSelecionado?
                    <ProdutosNoCarrinhoDoCliente clienteSelecionad={statePainel.clienteSelecionado}/>
            :
                <></>
            }

            <ProdutosNaVitrine todosProdutos={statePainel.produtos}/>
        </div>
    )
}


export default SectionCards;