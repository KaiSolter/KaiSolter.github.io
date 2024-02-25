import React from 'react';

function Score({score, bestScore}) {
    return (
        <div>
            <p>Current Streak:</p>
            <p>{score}</p>
            <p>Best Streak:</p>
            <p>{bestScore}</p>
        </div>
    )
}
export default Score