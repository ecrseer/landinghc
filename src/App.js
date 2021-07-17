
import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [dadosUsuario,setDadosUsuario] = useState({nome:'',email:''})

    useEffect(()=>{
        const dadosDeserializados = JSON.parse(localStorage.getItem('dadosUsuario'))
        setDadosUsuario(dadosDeserializados)
        let formulario = document.querySelector('form')
        formulario.onsubmit = (evento)=>{
            console.log('lovvs')
            evento.preventDefault()
        }
    },[])

    function atualizadorDados(evento){

        function atualizaEstadoObjeto(objetoAnterior){

            return  {...objetoAnterior,

                [evento.target.name]:evento.target.value }
        }

        setDadosUsuario(atualizaEstadoObjeto)
        console.log(dadosUsuario)
    }

    function salvaStorage(e){
        //e.preventDefault();

        console.log(`for ema`)
        const dadosSerializados = JSON.stringify(dadosUsuario);
        localStorage.setItem('dadosUsuario',dadosSerializados)

    }
//    document.addEventListener('onsub')

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Receba as melhores ofertas no seu melhor email!
        </p>
        <form id="debg" action="" method="GET">

            <div>Nome: <input type="text" placeholder="Como desejar ser chamado"
                              className="type" name="nome" onChange={atualizadorDados}  /></div>
            <div>Email: <input type="email"  className="type"
                               name="email" onChange={atualizadorDados}/></div>
            <button type="submit" className="btn" >Ficar por dentro</button>
        </form>

      </header>
        <section>

        </section>
      <footer>footerdfooter</footer>
    </div>
  );
}

export default App;
