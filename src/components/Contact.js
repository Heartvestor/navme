import React from 'react';

const Contact = () => (
    <div className="container bottommargin">

        <div className="section">
            <div className="row">
                <div className="col s12">
                <p className="center"><img src="assets/images/me.jpg" width="64px" height="64px" alt="" className="circle responsive-img" /></p>
                <blockquote className="left-align light">Below are my contact details. I'm available on WhatsApp with the +229 96 18 59 29.<br />
                I'm a phantom on Facebook, so I won't recommend contacting me there. Very few times on Messenger. LinkedIn, once in a while.<br />
                So, you may reach me via WhatsApp or call or email me... Thanks.
                </blockquote>
                </div>
            </div>
        </div>

        <div className="section center">
            <div className="row">
                <div className="col m4 offset-m4 z-depth-3">
                    <div className="light"><i className="material-icons">phone</i></div>
                    <div className="chip amber light">+229 96 18 59 29</div>
                    <div className="chip amber light">+229 65 66 95 48</div><br />
                    <div className="light"><i className="material-icons">email</i></div>        
                    <div className="chip amber light">heartvestor@gmail.com</div>  
                </div>
            </div>
        </div>     
    </div>
);

export default Contact;