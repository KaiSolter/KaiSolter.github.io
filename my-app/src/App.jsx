import './App.css';
import React, {useCallback, useState, useEffect} from 'react'
import InputBox from './components/InputBox'
import LetterBank from './components/LetterBank'
import Timer from './components/Timer'
import Score from './components/Score'
import Rules from './components/Rules'

function App() {
  const [sharedLetterBank, setSharedLetterBank] = useState([])
  const [key, setKey] = useState(0)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [timeKey, setTimeKey] = useState(0)

  useEffect(() => {
    document.title = "Word Game"
  }, [])

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
  },[])

  const updateBestScore = useCallback ( () => {
    if (score > bestScore ) { setBestScore(score) } 
  }, [score, bestScore, setBestScore])

  return (
    <h1>
      <div className='wrapper' >
      <Score score={score} bestScore={bestScore} />
      <div className='wrapper2'>
      <LetterBank key={key} onLettersUpdate={setSharedLetterBank} />
      <InputBox letterBank={sharedLetterBank} 
      onRegenerateLetterBank={regenerateLetterBank} 
      incrementScore={incrementScore}
      resetTimer={resetTimer}
      ></InputBox> 
      </div>
      <Timer 
      resetScore={resetScore}
      updateBestScore={updateBestScore}
      onRegenerateLetterBank={regenerateLetterBank} 
      timeKey={timeKey}
       />
      </div>
      <div className='rulesWrapper'> 
      <Rules/>
      </div>
    </h1>
  );
}

export default App;
