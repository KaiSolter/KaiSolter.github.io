import { useState } from 'react';



function InputBox( {letterBank} ) { 
  const [wordInput, setwordInput] = useState(''); 
  const handleinput = (event) => {
    setwordInput(event.target.value); 
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      verifyWord(wordInput); 
    }
  };

  function verifyWord(word) {
    let valid = true
    const capsWord = word.toUpperCase();
    for ( let reqchar in letterBank  ) {
      if(!capsWord.includes(reqchar)){ 
        valid = false
      }
    }
    if (valid) {
      alert('valid word')
    }
    else {
      alert('invalid word')
    }
    setwordInput('')

}

  return ( 
    <input type="text" value={wordInput} onChange={handleinput}  onKeyDown={handleKeyDown}  ></input>
  )
}

export default InputBox