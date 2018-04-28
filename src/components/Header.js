import React from 'react';
import { NavLink } from 'react-router-dom';
import { Parallax } from 'react-materialize';

const Header = () => (
    <div className="container-fluid ">
        <nav className="yellow accent-4">
            <div className="nav-wrapper container">
                <a href="" className="brand-logo black-text">NavMe</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/" activeClassName="is-active" className="black-text" exact={true}>Home</NavLink></li>
                    <li><NavLink to="/portfolio" activeClassName="is-active" className="black-text">Portfolio</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="is-active" className="black-text">Contact</NavLink></li>                  
                </ul>
            </div>
        </nav>
        <Parallax imageSrc="assets/images/bg6.jpg" alt="banner" />
      
    </div>
);

export default Header;