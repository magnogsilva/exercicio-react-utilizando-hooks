import logo from './logo.svg';
import './App.css';
import Frase from './components/Frase';
import SeuNome from './components/SeuNome';
import { useState } from 'react';

function App() {

  const name = 'magno gomes'
  const newName = name.toUpperCase()
  const [number, setNumber] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{newName}</p>
        <h3>
          Componente Principal
        </h3>
        <Frase/>
        <SeuNome 
        nome='Magno'
        idade='37'
        profissao='Estudante Softex'
        />
        <div>
          <p>Você clicou {number} vez(es).</p>
          <button onClick={() => setNumber(number + 1)}>
            Click aqui
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
