import Card from "../components/Card";
import SectionCards from "../components/SectionCards";
import ListaCategorica from "../components/ListaCategorica";
import {useState} from "react";

const PainelControle= ()=>{
    const [emailSelecionado,setEmailSelecionado] = useState('')
    function putEmailSelecionado(email){
        setEmailSelecionado(email)
    }
    useState(()=>{

    })

    return(
        <>
            <Card/>
            <div> Vitrine:
                <SectionCards/>
            </div>
            <ListaCategorica selecionaEmail={putEmailSelecionado}/>
        </>
    )
}

export default  PainelControle;