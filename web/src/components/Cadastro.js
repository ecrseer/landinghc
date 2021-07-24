import {useEffect, useState} from "react";
import {useHistory, useRouteMatch} from 'react-router-dom';
import './Cadastro.css'
const Cadastro = ({historia,msgBotao,camposAdicionais,
                      isLoginAdmin=false,isCadastro=true})=>{
    let history = useHistory()
    let match = useRouteMatch();
    const [dadosUsuario,setDadosUsuario] = useState({nome:'',email:''})
    const [nomeUsuario,setNomeUsuario] = useState("")
    const [alerta,setAlerta] = useState('')
    function atualizadorDados(evento){

        function atualizaEstadoObjeto(objetoAnterior){

            return  {...objetoAnterior,

                [evento.target.name]:evento.target.value }
        }

        setDadosUsuario(atualizaEstadoObjeto)
        console.log(dadosUsuario)
    }

    function salvaStorage(){
        const select_from = isLoginAdmin? 'dadosAdmin' :'dadosUsuarios'
        let dadosDB = JSON.parse(localStorage.getItem(select_from))
        if(!dadosDB){
            dadosDB=[]
            localStorage.setItem(select_from,JSON.stringify(dadosDB))
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


            if(usuarioExistente.length===0 && isCadastro) {
                dadosDB.push(dadosUsuario)
                localStorage.setItem(select_from, JSON.stringify(dadosDB))
            }else{

                let isSenhaCorreta = usuarioExistente[0].senha===dadosUsuario.senha
                if(isSenhaCorreta){
                    localStorage.setItem("sessaoAtual",
                        JSON.stringify(usuarioExistente[0]))
                    history.push("/")
                    return
                }
                if(isLoginAdmin){
                    setAlerta('Senha incorreta, tente novamente')
                }else{
                    setAlerta('Email ja cadastrado, escolha outro')
                }



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
        const formularioPreenchido = formu.checkValidity()
        formu.reportValidity()

        evento.preventDefault()
        evento.stopPropagation()
        if(!formularioPreenchido){
            return;
        }
        salvaStorage()

        if(historia){
            historia.push(`${match.url}/sucesso`)
        }
    }
    return(
        <form id="debg" action="" method="GET">
            <span style={{color:'#444'}}>{alerta}</span>
            <div> <input type="text" placeholder="Como deseja ser chamado"
                              className="type" name="nome"
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
                                       placeholder={descricaoCampo.placehold}
                                />
                            </div>
                        )
                    })
                    :
                    <></>
            }

            <button   className="btnpadrao" onClick={handleFormulario}>

                {msgBotao?
                    msgBotao
                    :
                    'Ficar por dentro'}</button>
        </form>
    )
}
export default Cadastro;