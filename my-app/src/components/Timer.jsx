import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(15);

  useEffect(() => {
  
    const timerId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

  
    return () => clearInterval(timerId);
  }, []); 

  return (
    <div>
      <p>{count}</p>
    </div>
  );
}

export default Timer;
