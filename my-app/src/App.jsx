import './App.css';
import InputBox from './components/InputBox';
import LetterBank from './components/LetterBank'

function App() {
  return (
    <header>
      <div>
      Letter Bank: 
      <LetterBank></LetterBank>
      </div> 
      <p> Enter Word: </p>
      <InputBox></InputBox>
    </header>
  );
}

export default App;
