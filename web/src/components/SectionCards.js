import {useContext, useEffect, useState} from "react";
import Card from "./Card"
import './SectionCards.css'
import {PainelControleContext} from "../hooks/usePainelControle";


const SectionCards = ()=>{
    const MockCards=()=>(
        <>
            <Card/>
            <Card/>
            <Card/>

            <Card/>
            <Card/>
            <Card/>

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
            {statePainel?
                statePainel.clienteSelecionado?
                        statePainel.clienteSelecionado.produtos.map(produto=>(
                            <div>{produto.nome}</div>
                        )):
                    <></>
            :<></>
            }
           <MockCards/>
        </div>
    )
}
export default SectionCards;