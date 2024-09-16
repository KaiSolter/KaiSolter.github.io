import React, { useCallback, useState, useEffect } from 'react'
import './Project.css'

function Projects() {
    return (
        <div className="project-container">
            <h1 className="black-text">Projects</h1>
            <div className="experience">
                <div className="job">
                    <h2>Word Game Web App
                    </h2>
                    <p>
                        I created a webapp as a project for Upsilon Pi Epsilon, the
                        International honor society for Computing and Information. The webapp is written in React and Javascript as well as CSS.
                        The app is a simple word game, the game generates three letters and the player must come up with a word
                        in English using the given letters before a timer runs out. I used an api call to a free dictionary to validate the player's guesses.
                    </p>
                    <div className='github-button-container' >
                        <a
                            href="https://github.com/KaiSolter/upe-project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-button"
                        >
                            GitHub
                        </a>
                    </div>
                    <div className="disclaimer-section">
                        <p className="disclaimer-text">
                            Stay tuned for more projects coming soon!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects