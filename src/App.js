import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZ61FevkRZCU58zK8mEpAElK3fCicqmjBiQ&usqp=CAU" className="App-logo" alt="logo" />
        <p>
          Nome: Augusto Bananinha 
        </p>
        <p className="small">
          Idade: 40 anos 
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profissão: Professor e Programador
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

