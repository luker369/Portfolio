import Navbar from "./Navbar";
import styled from 'styled-components';
import Typed from 'react-typed';
import { useState } from 'react';


const StyledMain = styled.div`

  .main {
    background: #111827;
    padding-left: 3em;
    padding-top: 6em;
    padding-bottom: 10em;
  }
  .hero-bottom {
    background: #111827;
    color: #fff;
    height: 64vh;
    font-family: 'Silkscreen', cursive;
    line-height: 5em;
  }
  @media (max-width: 700px) {
    .hero-bottom {
        line-height: 1;
    }
    .main {
        padding-left: 2em;

    }
  }
  .hero-bottom-intro {
    color: #00df9a;
  }
  .name {
    font-size: 3.7rem;
    margin-top: 0;
  }
  .hero-bottom-typed {
    color: #475569;
    font-size: 2rem;
  }
@media (max-width: 700px) {
    .name {
    margin-top: 0.5;
    margin-left: 0;
    }
    .hero-bottom-typed {
        font-size: 1rem;
        margin-top: 1em;
    }
}
  .buzz-words {
    filter: brightness(1.4) contrast(1.5);
  }
  .cta-button-hero {
    border: 1px solid white;
    padding: 0.3em 0.5em;
    background: transparent;
    width: 7.5em;
    height: 3em;
  }
  .cta-button {
    margin-top: -2em;
  }
@media (max-width: 700px) {
    .cta-button {
        margin-top: 4em;
    }
}

/*Start Tech Card Styles*/

.toggle-button-container {
  display: flex;
  padding: 1em;
  justify-content: space-around;
  background: #111827;
}
.toggle-button-container button {
  background: papayawhip;
  padding: 1em;
}

.projects-section {
    height: 90vh;
    background: #111827;
}

.tech-card-container {
  display: flex;
  justify-content: center;
  gap: 10em;
  filter: drop-shadow(0px 0px 20px rgba(0, 150, 255, 1));
}

.card-container {
  zoom: 0.8;
  max-width: 500px;
  background: rgba(192, 246, 253, 0.8);
  clip-path: polygon(
    30px 0,
    100% 0%,
    100% calc(100% - 30px),
    calc(100% - 30px) 100%,
    0% 100%,
    0% 30px
  );
  padding: 3px;
  margin: 0 auto;
  animation: flicker 0.95s 1;
}

.card-contents {
  max-width: 500px;
  margin: 0 auto;
  background: rgba(0, 0, 50, 0.7);
  position: relative;
  justify-content: middle;
  align-content: center;
  clip-path: polygon(
    32px 2px,
    100% 2px,
    100% calc(100% - 32px),
    calc(100% - 32px) calc(100% - 2px),
    0% calc(100% - 2px),
    0% 32px
  );
}

.card-header {
  margin: 0;
  color: white;
  padding: 1rem;
  text-align: center;
}

.card-header > h1 {
  animation: textShadow 1.6s infinite;
}

.card-image {
}

.card-image > img {
  border-top: 1px solid rgba(192, 246, 253, 1);
  border-bottom: 1px solid rgba(192, 246, 253, 1);
  box-shadow: 0 0 10px 5px rgba(0, 150, 255, 1);
}

.card-body {
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 1em;
  color: white;
  text-align: justify;
  font-size: 1.1em;
  outline: 3px solid red;
  min-height: 8em;
  max-height: 9em;
}

.card-footer {
  margin: 0;
  padding: 0.5em 1em;
  text-align: right;
  position: relative;
  animation: textShadow 1.6s infinite;
}

.created-by {
  color: white;
  position: relative;
  right: 1em;
}

.crt {
  animation: flicker 0.95s 1;
}

.crt::after {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(18, 16, 16, 0.1);
  opacity: 0;
  z-index: 0;
  pointer-events: none;
  animation: flicker 0.15s infinite;
}

.crt::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.06),
      rgba(0, 255, 0, 0.02),
      rgba(0, 0, 255, 0.06)
    );
  z-index: 0;
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
  text-shadow: 1px 2px 2px rgba();
}

@keyframes flicker {
  0% {
    opacity: 0.27861;
  }
  5% {
    opacity: 0.34769;
  }
  10% {
    opacity: 0.23604;
  }
  15% {
    opacity: 0.90626;
  }
  20% {
    opacity: 0.18128;
  }
  25% {
    opacity: 0.83891;
  }
  30% {
    opacity: 0.65583;
  }
  35% {
    opacity: 0.67807;
  }
  40% {
    opacity: 0.26559;
  }
  45% {
    opacity: 0.84693;
  }
  50% {
    opacity: 0.96019;
  }
  55% {
    opacity: 0.08594;
  }
  60% {
    opacity: 0.20313;
  }
  65% {
    opacity: 0.71988;
  }
  70% {
    opacity: 0.53455;
  }
  75% {
    opacity: 0.37288;
  }
  80% {
    opacity: 0.71428;
  }
  85% {
    opacity: 0.70419;
  }
  90% {
    opacity: 0.7003;
  }
  95% {
    opacity: 0.36108;
  }
  100% {
    opacity: 0.24387;
  }
}

@keyframes textShadow {
  0% {
    text-shadow: 0.4389924193300864px 0 1px rgba(0, 30, 255, 0.5),
      -0.4389924193300864px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  5% {
    text-shadow: 2.7928974010788217px 0 1px rgba(0, 30, 255, 0.5),
      -2.7928974010788217px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  10% {
    text-shadow: 0.02956275843481219px 0 1px rgba(0, 30, 255, 0.5),
      -0.02956275843481219px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  15% {
    text-shadow: 0.40218538552878136px 0 1px rgba(0, 30, 255, 0.5),
      -0.40218538552878136px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  20% {
    text-shadow: 3.4794037899852017px 0 1px rgba(0, 30, 255, 0.5),
      -3.4794037899852017px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  25% {
    text-shadow: 1.6125630401149584px 0 1px rgba(0, 30, 255, 0.5),
      -1.6125630401149584px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  30% {
    text-shadow: 0.7015590085143956px 0 1px rgba(0, 30, 255, 0.5),
      -0.7015590085143956px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  35% {
    text-shadow: 3.896914047650351px 0 1px rgba(0, 30, 255, 0.5),
      -3.896914047650351px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  40% {
    text-shadow: 3.870905614848819px 0 1px rgba(0, 30, 255, 0.5),
      -3.870905614848819px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  45% {
    text-shadow: 2.231056963361899px 0 1px rgba(0, 30, 255, 0.5),
      -2.231056963361899px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  50% {
    text-shadow: 0.08084290417898504px 0 1px rgba(0, 30, 255, 0.5),
      -0.08084290417898504px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  55% {
    text-shadow: 2.3758461067427543px 0 1px rgba(0, 30, 255, 0.5),
      -2.3758461067427543px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  60% {
    text-shadow: 2.202193051050636px 0 1px rgba(0, 30, 255, 0.5),
      -2.202193051050636px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  65% {
    text-shadow: 2.8638780614874975px 0 1px rgba(0, 30, 255, 0.5),
      -2.8638780614874975px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  70% {
    text-shadow: 0.48874025155497314px 0 1px rgba(0, 30, 255, 0.5),
      -0.48874025155497314px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  75% {
    text-shadow: 1.8948491305757957px 0 1px rgba(0, 30, 255, 0.5),
      -1.8948491305757957px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  80% {
    text-shadow: 0.0833037308038857px 0 1px rgba(0, 30, 255, 0.5),
      -0.0833037308038857px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  85% {
    text-shadow: 0.09769827255241735px 0 1px rgba(0, 30, 255, 0.5),
      -0.09769827255241735px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  90% {
    text-shadow: 3.443339761481782px 0 1px rgba(0, 30, 255, 0.5),
      -3.443339761481782px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  95% {
    text-shadow: 2.1841838852799786px 0 1px rgba(0, 30, 255, 0.5),
      -2.1841838852799786px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
  100% {
    text-shadow: 2.6208764473832513px 0 1px rgba(0, 30, 255, 0.5),
      -2.6208764473832513px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
  }
}
.about-me {
  height: 90vh;
  background: #111827;
  color: #fff;
  padding: 4em;
}
`;

    /*End Tech Card Styles*/

function App() {

  const [keyword, setKeyword] = useState("websites");

  const [projectsArray, setProjectsArray] = useState([
    {name: 'Project 1', category: "websites", description: 'a react project to easily filter through recipies saving me time each night cooking myself dinner.'},
    {name: 'Project 2', category: "application", description: 'a react project to easily filter through recipies saving me time each night cooking myself dinner.'},
    {name: 'Project 3', category: "websites", description: 'a vanilla project to easily filter through recipies saving me time each night cooking myself dinner.'} ]);

  return (
    <>
    <Navbar />
    <StyledMain>
      <div className="main">      
        <div className="hero-bottom">
            <p className="hero-bottom-intro">Hi, my name is</p>
            
            <h1 className="name">
            Luke Sterling.
            </h1>
            <div className="">
                <p className="hero-bottom-typed">
                    I use
                    <Typed
                        className="md:text-6xl lg:text-5xl text-xl font-bold md:pl-2 pl-1 buzz-words"
                        strings={['React', 'Node.js']}
                        typeSpeed={120}
                        backSpeed={60}
                        loop
                    />
                    &nbsp;to build full-stack web apps.
                </p>
                <a className="cta-button-hero" href="/static/media/Resume.9b913b72f43af4f4d101.pdf" target="_blank" rel="noreferrer">
                <button className="cta-button">My Work</button>
                </a>
            </div>
        </div>                       
      </div>

      {/* Projects Section */}
<div className="toggle-button-container">
      <button onClick={()=>{setKeyword('application')}}>Apps</button>
      <button onClick={()=>{setKeyword('websites')}}>Websites</button>
      </div>
        
        {/* Card 1 */}
      <div className="projects-section">
        <div className="tech-card-container">
          <div className="card">
            <div className="crt"></div>
            <div className="card-container">
              <div className="card-contents">
                <div className="crt"></div>
                <div className="card-header">
                  <h1>HEADLESS CMS</h1>
                </div>
                <div className="card-image">
                  <img src="https://picsum.photos/500/200" />
                </div>
                <div className="card-body">
                  <p>This project was a solution for a small start-up transitioning to a full featured ecommerce store. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut enim blandit volutpat maecenas volutpat blandit. Mauris in aliquam sem fringilla ut morbi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut enim blandit volutpat maecenas volutpat blandit. Mauris in aliquam sem fringilla ut morbi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut enim blandit volutpat maecenas volutpat blandit. Mauris in aliquam sem fringilla ut morbi. </p>
                </div>
                <div className="card-footer">
                  <span className="created-by"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
{projectsArray
.filter((project, index)=>{return keyword === `${project.category}`})
.map((project)=>(
          <div className="card">
            <div className="crt"></div>
            <div className="card-container">
              <div className="card-contents">
                <div className="crt"></div>
                <div className="card-header">
                  <h1>{project.name}</h1>
                </div>
                <div className="card-image">
                  <img src="https://picsum.photos/500/200" />
                </div>
                <div className="card-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut enim blandit volutpat maecenas volutpat blandit. Mauris in aliquam sem fringilla ut morbi. </p>
                </div>
                <div className="card-footer">
                  <span className="created-by"></span>
                </div>
              </div>
            </div>
          </div>
          ))}
          
                    
        </div>
      </div>

      {/* End Projects Section */}


      {/* Start About Me Section */}

      <div className="about-me">
        <h1>About Me</h1>
        <p>I love technology, business, and psychology, and the intersection of these fields is my playground. I apply interactive human psychology to make intuitive applications which convert sales, solve problems in business, and provide an addictive user experience. That is when I'm not growing and consuming tons and tons of cannabis all day and night every day. Otherwise I'm raising my young son.</p>
      </div>

      {/* End About Me Section */}

      {/* Start Contact Me Section */}

      

      {/* End Contact Me Section */}

    </StyledMain>
    </>
  );
}

export default App;
