import './App.css';
import React, {useCallback, useState} from 'react'
import InputBox from './components/InputBox';
import LetterBank from './components/LetterBank'
import Timer from './components/Timer'

function App() {
  const [sharedLetterBank, setSharedLetterBank] = useState([]);
  const [key, setKey] = useState(0);

  const regenerateLetterBank = useCallback( () => {
    setKey(prevKey => prevKey + 1);
  }, []);

  return (
    <header>
      <div>
      Letter Bank: 
      <LetterBank key={key} onLettersUpdate={setSharedLetterBank} ></LetterBank>
      </div> 
      <p> Enter Word: </p>
      <InputBox letterBank={sharedLetterBank} onRegenerateLetterBank={regenerateLetterBank} ></InputBox> 
      <Timer></Timer>
    </header>
  );
}

export default App;
