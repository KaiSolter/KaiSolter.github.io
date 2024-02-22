import './App.css';
import InputBox from './components/InputBox';
import LetterBank from './components/LetterBank'
import Timer from './components/Timer'

function App() {
  return (
    <header>
      <div>
      Letter Bank: 
      <LetterBank></LetterBank>
      </div> 
      <p> Enter Word: </p>
      <InputBox></InputBox> 
      <Timer></Timer>
    </header>
  );
}

export default App;
