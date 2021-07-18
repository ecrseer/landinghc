import {useEffect} from "react";

export default function Sucesso({historia}){
    useEffect(()=>{
        setTimeout(()=>{
            historia.push("/cadastrado")
        },2000)
    },[])
    return(
        <h1>Parabéns você ficará sabendo de todas ofertas direto no seu email!!</h1>
    )
}