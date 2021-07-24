import Card from "../components/Card";
import SectionCards from "../components/SectionCards";
import ListaCategorica from "../components/ListaCategorica";
import {useState} from "react";
import {PainelControleProvider} from "../hooks/usePainelControle";

const PainelControle= () => {
    const [emailSelecionado,setEmailSelecionado] = useState('')
    function putEmailSelecionado(email){
        setEmailSelecionado(email)
    }
    useState(()=> {

    })

    return(
        <PainelControleProvider className="App-header main">
            <Card/>
            <div> Vitrine:
                <SectionCards/>
            </div>
            <ListaCategorica selecionaEmail={putEmailSelecionado}/>
        </PainelControleProvider>
    )
}

export default  PainelControle;