import React from 'react';

const Footer = () => (
    <footer className="page-footer amber light">
        <div className="container">
            <div className="row">
                <div className="col l6 s12 center">
                <h5 className="white-text">Bio</h5>
                <p className="center"><img src="assets/images/me.jpg" width="64px" height="64px" alt="" className="circle responsive-img" /></p>
                <p className="black-text center">Walter WILSON <br /><br />Software Developer with focus on the JavaScript Ecosystem for every possible aspect of software development...</p>
                </div>
                <div className="col l4 offset-l2 s12 center">
                <h5 className="white-text">Contact</h5>
                <ul>
                    <li className="black-text" href="#!"><i className="material-icons amber white-text">mail_outline</i><br/>heartvestor@gmail.com</li><br />
                    <li className="black-text" href="#!"><i className="material-icons amber white-text">phone</i><br/>+229 96 18 59 29 <br /> +229 65 66 95 48</li><br />
                    <li className="black-text" href="#!"><i className="material-icons amber white-text">location_on</i><br/>Cotonou, Republic of Benin</li><br />
                </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright amber darken-3">
            <div className="container">
            © 2018 Developed by Walter Wilson
            <a className="right" href="https://www.linkedin.com/in/walter-wilson-340548b1" rel="noopener noreferrer" target="_blank"><img src="assets/icons/linkedin.png" alt="" className="responsive-img" /></a> 
            <a className="right" href="https://www.facebook.com/walter.wilson.94651774" rel="noopener noreferrer" target="_blank"><img src="assets/icons/facebook.png" alt="" className="responsive-img" /></a>
            </div>
        </div>
    </footer>
);

export default Footer;