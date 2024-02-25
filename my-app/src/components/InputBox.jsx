import { useState } from 'react';

function InputBox( {letterBank, incrementScore, onRegenerateLetterBank} ) { 
  const [wordInput, setwordInput] = useState(''); 
  const handleinput = (event) => {
    setwordInput(event.target.value); 
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      verifyWord(wordInput); 
    }
  };

  async function fetchDef(word) {
    try {
      const dictUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      const response = await fetch(dictUrl); 
      if (!response.ok && response.status === 404) {
        return false;
      }
      if (!response.ok) {
        throw new Error('Network request failed');
      }
      const entries = await response.json();
      return entries.length > 0;
    } catch (e) {
      console.error('There was a problem with your fetch operation:', e);
      throw e; 
    }
  }

  function verifyWord(word) {
    let validLetters = true
    const capsWord = word.toUpperCase();
    for ( let reqchar in letterBank  ) {
      if(!capsWord.includes(letterBank[reqchar])){ 
        validLetters = false
      }
    }
    if (validLetters) {
      fetchDef(word).then(validEngWord => {
        if (validEngWord) {
          alert('valid word');
          incrementScore();
        } else {
          alert('invalid word');
        }
        setwordInput('');
        onRegenerateLetterBank();
      }).catch(error => {
        console.error('Error fetching definition:', error);
        alert('Error checking word validity');
        setwordInput('');
      });
    } else {
      alert('invalid word');
      setwordInput('');
      onRegenerateLetterBank();
    }
}

  return ( 
    <input type="text" value={wordInput} onChange={handleinput}  onKeyDown={handleKeyDown}  ></input>
  )
}

export default InputBox