import './App.css';
import {Header, Footer, Exemplo, ExemploComponent} from './components/principais'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      </header>
      
      <ExemploComponent />
      <Exemplo dados={ {ano:2020,mes:10}}/>
  
      <Footer />
    </div>
  );
}

export default App;
