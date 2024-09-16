
import React from 'react';
import './General.css'

function Assignments() {
    return (
        <div className="container">
            <h1 className="black-text">Assignments</h1>
            <div className="job">
                <h1 className='black-text-sm'>Assignment 0</h1>
                <div className='github-button-container' >
                    <a
                        href="https://github.com/KaiSolter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-button"
                    >
                        Github Link
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Assignments;