import './App.css';
import React, {useCallback, useState} from 'react'
import InputBox from './components/InputBox'
import LetterBank from './components/LetterBank'
import Timer from './components/Timer'
import Score from './components/Score'

function App() {
  const [sharedLetterBank, setSharedLetterBank] = useState([])
  const [key, setKey] = useState(0)
  const [score, setScore] = useState(0)
  const [timeKey, setTimeKey] = useState(0)

  const regenerateLetterBank = useCallback( () => {
    setKey(prevKey => prevKey + 1);
  }, []);

  const incrementScore = useCallback ( () => {
    setScore((prevScore) => prevScore +1);
  },[]);

  const resetScore = useCallback ( () => {
    setScore(0)
  },[]);

  const resetTimer = useCallback( () => {
    setTimeKey(prevTimeKey => prevTimeKey + 1);
  })

  return (
    <header>
      <div>
      Letter Bank: 
      <LetterBank key={key} onLettersUpdate={setSharedLetterBank} ></LetterBank>
      </div> 
      <p> Enter Word: </p>
      <InputBox letterBank={sharedLetterBank} 
      onRegenerateLetterBank={regenerateLetterBank} 
      incrementScore={incrementScore}
      resetTimer={resetTimer}
      ></InputBox> 
      <Timer 
      resetScore={resetScore}
      onRegenerateLetterBank={regenerateLetterBank} 
      timeKey={timeKey}
       ></Timer>
      <p>Streak:</p>
      <Score score={score} ></Score>
    </header>
  );
}

export default App;
