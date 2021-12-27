import logo from './logo.svg';
import './App.css';
import Game from './Components/Game';

function App() {
  return (
    <div class='container'>
      <div id='home' class='flex-colum flex-center'>
        <h1>Are you Ready?</h1>
        <button onClick={Game}>Play</button>
      </div>
    </div>
  );
}

export default App;
