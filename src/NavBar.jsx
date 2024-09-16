import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white">About Me</Link>
                    </li>
                    <li>
                        <Link to="/WorkExp" className="text-white">Work Experience</Link>
                    </li>
                    <li>
                        <Link to="/Projects" className="text-white">Projects</Link>
                    </li>
                    <li>
                        <Link to="/Contacts" className="text-white">Contact Information</Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
