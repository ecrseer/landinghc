import {useEffect, useState} from "react";
import {useRouteMatch} from 'react-router-dom';

const Cadastro = ({historia})=>{
    let match = useRouteMatch();
    const [dadosUsuario,setDadosUsuario] = useState({nome:'',email:''})
    const [nomeUsuario,setNomeUsuario] = useState("")
    function atualizadorDados(evento){

        function atualizaEstadoObjeto(objetoAnterior){

            return  {...objetoAnterior,

                [evento.target.name]:evento.target.value }
        }

        setDadosUsuario(atualizaEstadoObjeto)
        console.log(dadosUsuario)
    }

    function salvaStorage(){
        const dadosSerializados = JSON.stringify(dadosUsuario);
        localStorage.setItem('dadosUsuario',dadosSerializados)
    }
    function handleFormulario(evento){
        const formu = document.querySelector("form")
        formu.checkValidity()
        formu.reportValidity()

        evento.preventDefault()
        evento.stopPropagation()
        salvaStorage()

        if(historia){
            historia.push(`${match.url}/sucesso`)
        }
    }
    return(
        <form id="debg" action="" method="GET">

            <div> <input type="text" placeholder="Como deseja ser chamado"
                              className="type" name="nome" required
                              onChange={atualizadorDados}  /></div>
            <div> <input type="email"  className="type"
                               required placeholder="Seu melhor email"
                               name="email" onChange={atualizadorDados}/></div>
            <h1 onClick={()=>salvaStorage() }>
                teste
            </h1>
            <button   className="btn" onClick={handleFormulario}>
                Ficar por dentro</button>
        </form>
    )
}
export default Cadastro;