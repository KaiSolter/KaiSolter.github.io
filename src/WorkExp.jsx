import React from 'react';
import './WorkExp.css';
import './General.css';

function WorkExp() {
    return (
        <div className="work-exp-container">
            <h1 className="black-text">Work Experience</h1>
            <div className="experience">
                <div className="job">
                    <h2>Software Engineering Intern</h2>
                    <p><em>GEM Health, Minneapolis-St. Paul, MN (remote)</em> <span className="date">Summer 2024</span></p>
                    <ul>
                        <li>Developed and implemented new frontend features and pages, enhancing user interface and overall user experience</li>
                        <li>Collaborated with product management to translate UI/UX designs into functional, responsive components</li>
                        <li>Diagnosed and resolved frontend bugs, improving application performance and reliability</li>
                        <li>Refactored codebase to improve quality and maintainability</li>
                    </ul>
                </div>
                <div className="job">
                    <h2>Software Engineering Intern</h2>
                    <p><em>Alife Health, San Francisco, CA (remote)</em> <span className="date">Summer 2023</span></p>
                    <ul>
                        <li>Implemented end-to-end test suite for React Native mobile app using Detox and Jest frameworks, increasing app quality, decreasing regression bugs</li>
                        <li>Performed manual regression and new-feature testing on mobile app; documented test cases</li>
                        <li>Identified and fixed user-visible bugs in React Native mobile app</li>
                        <li>Worked with product management to implement requested features in React Native mobile app</li>
                    </ul>
                </div>
                <div className="job">
                    <h2>Crew Member</h2>
                    <p><em>Chipotle, Louisville, CO</em> <span className="date">August 2020 - September 2021</span></p>
                    <ul>
                        <li>Prepped food, ensured food prep was aligned with health and safety standards</li>
                        <li>Served customers and solved issues with orders to their satisfaction</li>
                        <li>Cleaned food preparation spaces in order to meet health and safety standards</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WorkExp