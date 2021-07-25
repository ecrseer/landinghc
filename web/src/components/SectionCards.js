import {useContext, useEffect, useState} from "react";
import Card from "./Card"
import './SectionCards.css'
import {PainelControleContext} from "../hooks/usePainelControle";
import localStoNames from '../assets/mylocalStorageNames.json'

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

    function cadastraLocalStorageEmemoria(produto){
        if(!statePainel.clienteSelecionado.produtos){
            setStatePainel({...statePainel,clienteSelecionado: {
                ...statePainel.clienteSelecionado,
                    produtos:[]
                }})
        }
        const novaListaProdutos = statePainel.clienteSelecionado.produtos.push(produto)
        setStatePainel({...statePainel,clienteSelecionado: {
                ...statePainel.clienteSelecionado,
                produto:novaListaProdutos
            }})


        let clientesDB = JSON.parse(localStorage.getItem(localStoNames.lClientes))
        for (let i = 0; i < clientesDB.length; i++) {
            if(clientesDB[i].email===statePainel.clienteSelecionado.email){
                clientesDB[i]=statePainel.clienteSelecionado;
            }
        }

        localStorage.setItem(localStoNames.lClientes,JSON.stringify(clientesDB));

    }

    useEffect(()=>{

    },[statePainel?.clienteSelecionado?.produtos])
    return(
        <div className="SectionCards">

            {statePainel?
                statePainel.clienteSelecionado?
                        statePainel.clienteSelecionado.produtos?.map((produto,index)=>(
                            <div key={index}
                                onClick={()=>{}}>
                                <div>{produto.nome}</div>

                                <button onClick={()=>cadastraLocalStorageEmemoria(produto)}>
                                    +</button>
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