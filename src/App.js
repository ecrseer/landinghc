
import './App.css';

function App() {
    function salvaStorage(e){
        e.preventDefault();
        console.log(`for ema`)
    }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Receba as melhores ofertas no seu melhor email!
        </p>
        <div>

            <div>Nome: <input type="text" placeholder="Como deseja ser chamado"
                              className="type"/></div>
            <div>Email: <input type="email"  className="type"/></div>

        </div>
          <button type="submit" className="btn" onClick={salvaStorage}>Ficar por dentro</button>
      </header>
        <section>

        </section>
      <footer>footerdfooter</footer>
    </div>
  );
}

export default App;
