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
                        statePainel.clienteSelecionado.produtos.map((produto,index)=>(
                            <div key={index}
                                onClick={()=>{}}>
                                {produto.nome}
                                <button></button>
                            </div>
                        )):
                    <></>
            :<></>
            }

           <MockCards/>
        </div>
    )
}
export default SectionCards;