import React, { useCallback, useState, useEffect } from 'react'
import './Home.css'

function Home() {
    return (
        <div className="container">
            <h1 className="black-text">
                Kai Solter
            </h1>
            <div className="job">
                <p>
                    Hello! My name is Kai Solter. I am currently a 3rd year computer science student at Boston University
                    with a passion for software development and problem-solving. I have experience
                    in building frontend applications, from my internships at GEM Health and Alife Health.
                    My skills include programming experience in Python, Java, JavaScript, TypeScript, C, C++, HTML, CSS, and OCaml
                    as well as working with frameworks like React and React Native.
                </p>
            </div>
        </div>
    )
}

export default Home