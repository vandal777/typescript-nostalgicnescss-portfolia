import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Layout = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <nav id="nav-wrap">
            <a className="mobile-btn" onClick={() => setOpen(!open)} title="Show navigation" href="#/">
                Show navigation
            </a>
            <a className="mobile-btn" title="Hide navigation" href="#/">
                Hide navigation
            </a>
            <ul id="nav" className={`nav${open}`}>
                <li>
                    <NavLink onClick={() => setOpen(!open)} exact to="/">
                        <span className="nes-text is-primary">Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setOpen(!open)} to="/about">
                        <span className="nes-text is-primary"> Sobre mi</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setOpen(!open)} to="/resume">
                        <span className="nes-text is-primary"> Curriculum</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Layout;
