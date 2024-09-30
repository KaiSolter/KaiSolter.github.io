
import React from 'react';
import './General.css'

function Assignments() {
    return (
        <>
            <div className="container">
                <h1 className="black-text">Assignments</h1>
                <div className="job">
                    <h1 className='black-text-sm'>Assignment 0</h1>
                    <div className='github-button-container' >
                        <a
                            href="https://github.com/KaiSolter/bu_kaisolter-assignment-0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-button"
                        >
                            Github Link
                        </a>
                    </div>
                </div>
                <div className="job">
                    <h1 className='black-text-sm'>Assignment 1</h1>
                    <div className='github-button-container' >
                        <a
                            href="https://github.com/KaiSolter/bu_kaisolter-assignment-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-button"
                        >
                            Github Link
                        </a>
                    </div>
                </div>
                <div className="job">
                    <h1 className='black-text-sm'>Assignment 2</h1>
                    <div className='github-button-container'>
                        <a
                            href="https://github.com/KaiSolter/bu_kaisolter-assignment-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-button"
                        >
                            Github Link
                        </a>
                    </div>
                    {/* Video Embed for Assignment 2 */}
                    <div className='video-container'>
                        <video width="600" controls>
                            <source src="src\props\K-Means-DemoKai.mp4" type="video/mp4" />
                            Demo Video
                        </video>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Assignments;