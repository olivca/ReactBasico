import Menu from './Components/Menu/Menu';
import Categorias from './Components/Categorias/Categorias';
import Galeria from './Components/Galeria/Galeria';
import Relogio from './Components/Relogio/Relogio';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
        <Relogio />
      </header>
      
      <main className="container">
        <div className="row mt-4">
        <Categorias />  
        <Galeria />
        </div>        
      </main>
    </div>
  );
}

export default App;
