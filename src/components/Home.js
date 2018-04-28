import React from 'react';
import { Carousel } from 'react-materialize';

const Home = () => (
    <div>
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col s12">
                        <p className="center"><img src="assets/images/me.jpg" width="64px" height="64px" alt="me" className="circle responsive-img" /></p>
                        <blockquote className="left-align light">I'm Walter Wilson, a Software Developer, a Tech entrepreneur, deeply fond of the technology world, software deevelopment in particular, and its numerous marvels.<br />
                        As a startupper, am at the core a highly innovation bent individual, with the firm intent of wielding tech as my weapon of choice for professional - entrepreneurial success...<br />
                        Counting from this year 2018, my focus is much more on the JavaScript ecosystem, use JavaScript for every possible aspect of software develeopment, with emphasis on React, React Native, Firebase, NodeJS frameworks...<br />
                        Below are the diverse domains I'm liable to intervene in...<br /></blockquote>
                    </div>
                </div>
            </div>
        </div>

        <Carousel images={[
            'assets/images/web.png',
            'assets/images/mobile.png',
            'assets/images/pc.png',
            'assets/images/innocon.png',
            'assets/images/2d.png',
            'assets/images/3d.png',
            'assets/images/etc.png'
          ]} />

        <div className="container">

            <div className="section">
                <div className="row">
                    <div className="col s12">
                        <p className="center"><img src="assets/images/me.jpg" width="64px" height="64px" alt="" className="circle responsive-img" /></p>
                        <blockquote className="left-align light">There are so many technologies that help carry out tech projects. Hundreds of them, 
                        depending on what's the project's characteristics. So the appropriate tech stack for a tech project is a case per case affair. No one "size" fits "all".<br />
                        Being necessarily an autodidact, I keep learning day by day, acquiring knowledge... And, in no manner boast to be a multicore expert.<br />
                        To, me, what matters more is quality results, keeping in mind key factors like time to market, costs of development, 'developer happiness', and other performance factors aiming at excellence... 
                        Over the past four (04) years +, I've dealt with the following technologies in varying degrees : </blockquote>
                    </div>
                </div>
            </div>
            
            <div className="section bottommargin">
                <div className="chip amber white-text">React - Redux</div>
                <div className="chip amber white-text">React Native</div>
                <div className="chip amber white-text">HTML5</div>
                <div className="chip amber white-text">CSS</div>
                <div className="chip amber white-text">JavaScript ES6</div>
                <div className="chip amber white-text">JQuery</div>
                <div className="chip amber white-text">Bootstrap</div>
                <div className="chip amber white-text">Foundation</div>
                <div className="chip amber white-text">Materialize CSS</div>
                <div className="chip amber white-text">PHP</div>
                <div className="chip amber white-text">MySql</div>
                <div className="chip amber white-text">MongoDB</div>
                <div className="chip amber white-text">WordPress</div>
                <div className="chip amber white-text">WAMP</div>
                <div className="chip amber white-text">JAVA</div>
                <div className="chip amber white-text">Android Studio</div>
                <div className="chip amber white-text">Firebase</div>
                <div className="chip amber white-text">Python</div>
                <div className="chip amber white-text">Ruby</div>
                <div className="chip amber white-text">C# - Unity 3D</div>
                <div className="chip amber white-text">Django</div>
                <div className="chip amber white-text">RubyOnRails</div>
                <div className="chip amber white-text">JSON</div>
                <div className="chip amber white-text">XML</div>
                <div className="chip amber white-text">NodeJS - Express</div>
                <div className="chip amber white-text">Ember JS</div>
                <div className="chip amber white-text">Angular</div>
                <div className="chip amber white-text">AI - DialogFlow</div>
                <div className="chip amber white-text">MVC</div>
                <div className="chip amber white-text">Scrum</div>
                <div className="chip amber white-text">Lean Startup</div>
                <div className="chip amber white-text">Mockups</div>
                <div className="chip amber white-text">CyberSecurity</div>
                <div className="chip amber white-text">Git - GitHub</div>
                <div className="chip amber white-text">IntelliJ</div>
                <div className="chip amber white-text">Visual Studio Community</div>
                <div className="chip amber white-text">Visual Studio Code</div>
                <div className="chip amber white-text">PyCharm</div>
                <div className="chip amber white-text">PyCharm Edu</div>
                <div className="chip amber white-text">RubyMine</div>
                <div className="chip amber white-text">Atom</div>
                <div className="chip amber white-text">Sublime Text</div>
                <div className="chip amber white-text">Eclipse</div>
                <div className="chip amber white-text">NetBeans</div>
                <div className="chip amber white-text">Stencyl</div>
                <div className="chip amber white-text">Unity 3D</div>
                <div className="chip amber white-text">Photoshop CS6</div>
                <div className="chip amber white-text">Cinema 4D R15</div>
                <div className="chip amber white-text">After Effects CS6</div>
                <div className="chip amber white-text">...</div>
            </div>
                

        </div>    
    </div>
);

export default Home;



