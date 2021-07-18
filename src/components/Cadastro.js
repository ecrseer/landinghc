import {useEffect, useState} from "react";

export default function Cadastro(history){
    const [dadosUsuario,setDadosUsuario] = useState({nome:'',email:''})
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
    useEffect(()=>{
        let formulario = document.querySelector('form')
        formulario.onsubmit = (evento)=>{
            salvaStorage()
            evento.preventDefault()
            evento.stopPropagation()
            history.push("/sucesso")

        }
    },[])
    return(
        <form id="debg" action="" method="GET">

            <div>Nome: <input type="text" placeholder="Como desejar ser chamado"
                              className="type" name="nome" required
                              onChange={atualizadorDados}  /></div>
            <div>Email: <input type="email"  className="type" required
                               name="email" onChange={atualizadorDados}/></div>
            <button type="submit" className="btn" >Ficar por dentro</button>
        </form>
    )
}