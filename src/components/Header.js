import React from 'react';
import { NavLink } from 'react-router-dom';
import { Parallax, Dropdown, Button } from 'react-materialize';

const Header = () => (
    <div className="container-fluid center">
        <Dropdown trigger={
            <Button className="amber btn-large waves-effect waves-light topmargin bottommargin"><i className="material-icons black-text">menu</i></Button>
        }>
            <li><NavLink to="/" activeClassName="is-active" className="black-text" exact={true}>Home</NavLink></li>
            <li><NavLink to="/portfolio" activeClassName="is-active" className="black-text">Portfolio</NavLink></li>
            <li><NavLink to="/contact" activeClassName="is-active" className="black-text">Contact</NavLink></li> 
        </Dropdown>
        <Parallax imageSrc="assets/images/bg6.jpg" alt="banner" /> 
    </div>
);

export default Header;