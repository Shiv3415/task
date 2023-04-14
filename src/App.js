import logo from './logo.svg';
import './App.css';
import benz from "./benz.gif"

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={benz} alt="logo" style={{backgroundColor:"black",width:"100%",height:"100%"}}/>
      </header>
    </div>
  );
}

export default App;
