import React, { useState, useEffect } from 'react';
import './App.css';
import CrochetTable from './components/CrochetTable';

function App() {

  const [puntos, setPuntos] = useState([]);

  useEffect(() => {
    fetch('/data/puntosCrochet.json')
        .then((response) => response.json())
        .then((data) => {
            setPuntos(data);
        })
        .catch((error) => console.error('Error al cargar los datos:', error));
}, []);

  return (
    <div className="App">
            <header className="App-header">
                <h1 style={{ textAlign: 'center', margin: '20px' }}>Crochet</h1>
            </header>
            <main>
                <CrochetTable puntos={puntos} />
            </main>
            <footer>
                <p>&copy; 2024 Crochet App</p>
            </footer>
    </div>
  );
}

export default App;
