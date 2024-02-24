import './App.css';
import React, {useState} from 'react'
import InputBox from './components/InputBox';
import LetterBank from './components/LetterBank'
import Timer from './components/Timer'

function App() {
  const [sharedLetterBank, setSharedLetterBank] = useState([]);

  return (
    <header>
      <div>
      Letter Bank: 
      <LetterBank onLettersUpdate={setSharedLetterBank} ></LetterBank>
      </div> 
      <p> Enter Word: </p>
      <InputBox letterBank={sharedLetterBank} ></InputBox> 
      <Timer></Timer>
    </header>
  );
}

export default App;
