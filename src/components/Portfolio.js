import React from 'react';
import { Carousel } from 'react-materialize';

const Portfolio = () => (
    <div className="bottommargin">
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col s12">
                    <p className="center"><img src="assets/images/me.jpg" width="64px" height="64px" alt="" className="circle responsive-img" /></p>
                    <blockquote className="left-align light">Since late 2012 I've carried out a deal of personal tech projects I've shutdown, among which ecommerce, academic - professional, social networking...
                    <br />While in the runs for bootstrapping a new startup and get it propulsed, or a cool job opportunity, I offer professional services as a consultant.<br />
                    The following are some client websites actually online, with some yet to be online.
                    </blockquote>
                    </div>
                </div>
            </div>
        </div>

        <Carousel options={{ fullWidth: true, indicators: true }}>
            <div className='amber white-text center'>
                <h2>MitZiks.Com</h2>
                <p className="black-text">A music website for a music production hothouse</p>
                <p><img className="responsive-img" src="assets/images/mitziks.png" alt="miziks" /></p>
            </div>
            <div className='amber white-text center'>
                <h2>AriesTheEp.Com</h2>
                <p className="black-text">Aries EP Album Promo Music Website</p>
                <p><img className="responsive-img" src="assets/images/ariesep.png" alt="ariestheep" /></p>
            </div>
            <div className='amber white-text center'>
                <h2>Gakamidsa.net</h2>
                <p className="black-text">A Professional Corporate Website<br />(offline now)</p>
                <p><img className="responsive-img" src="assets/images/gakamid1.png" alt="gakamidsa" /></p>
            </div>
            <div className='amber white-text center'>
                <h2>My Personal Site</h2>
                <p className="black-text">Of course, this too! ;-)</p>
                <p><img className="responsive-img" src="assets/images/navme.png" alt="navme" /></p>
            </div>
        </Carousel>
    </div>
);

export default Portfolio;
