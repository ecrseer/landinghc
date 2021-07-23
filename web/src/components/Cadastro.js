import {useEffect, useState} from "react";
import {useHistory, useRouteMatch} from 'react-router-dom';

const Cadastro = ({historia,msgBotao,camposAdicionais,isLogin=false})=>{
    let history = useHistory()
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
        let dadosDB = JSON.parse(localStorage.getItem('dadosUsuarios'))
        if(!dadosDB){
            dadosDB=[]
            localStorage.setItem('dadosUsuarios',JSON.stringify(dadosDB))
        }
        let usuarioExistente=
            dadosDB.filter(usuari=>{
                    return(
                usuari.email?
                    usuari.email === dadosUsuario.email
                    :
                    false)
                }
                )


            if(usuarioExistente.length===0 || !isLogin) {
                dadosDB.push(dadosUsuario)
                localStorage.setItem("dadosUsuarios", JSON.stringify(dadosDB))
            }else{
                localStorage.setItem("sessaoAtual",JSON.stringify(usuarioExistente[0]))
                history.push("/")
            }


        /*
        /!*a*!/
        let serializados=JSON.stringify(dadosDB)
        localStorage.setItem('dadosUsuarios',dadosSerializados)

        const dadosSerializados = JSON.stringify(dadosUsuario);
        localStorage.setItem('dadosUsuarios',dadosSerializados)*/
    }

    function handleFormulario(evento){

        let formu = document.querySelector("form")
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
            {
                camposAdicionais?
                    camposAdicionais.map(descricaoCampo=>{
                        return(
                            <div>
                                <input type={descricaoCampo.tipo}
                                       required
                                       className="type"
                                       name={descricaoCampo.nome}
                                       onChange={atualizadorDados}
                                />
                            </div>
                        )
                    })
                    :
                    <></>
            }

            <button   className="btn" onClick={handleFormulario}>
                {msgBotao?
                    msgBotao
                    :
                    'Ficar por dentro'}</button>
        </form>
    )
}
export default Cadastro;