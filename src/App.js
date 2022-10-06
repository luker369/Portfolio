import Navbar from "./Navbar";
import styled from 'styled-components';
import Typed from 'react-typed';
import { useEffect, useState } from 'react';
import StyledMain from "./app.styles";
// import ItemCard from "./ItemCard";
// import ProjectsList from "./ProjectsList";




function App() {

  
  const [projects, setProjects] = useState([]);
  const [category, setCategory] = useState("");
  // const filteredProjects = projects.filter((project)=>{return category === project.category})

  // const [projects, setProjects] = useState(
  //   [
  //   {id: "0", name: 'Feeding Felines Logo', category: "design", description: 'Created brand logo for Feeding Homeless Felines Foundation, a non-profit organization helping the Miami-Dade community.', picUrl: 'https://dl3.pushbulletusercontent.com/ORcqteNQ0CdJmIYxloY1kqwNEZn8ASr9/image.png'},
  //   {id: "1", name: 'Feeding Felines Website', category: "react website", description: 'React-based website supporting Feeding Homeless Felines Foundation.', picUrl: 'https://dl3.pushbulletusercontent.com/KzaDLuqzsXVqZVYuRyMp4NO8BvLIdfJv/image.png'},
  //   {id: "5", name: 'Luke Sterling Portfolio', category: "react website", description: 'My portfolio site is a React-based website showcasing my skills with filtering and mapping of data.', picUrl: 'https://dl3.pushbulletusercontent.com/KzaDLuqzsXVqZVYuRyMp4NO8BvLIdfJv/image.png'},
  //   {id: "2", name: 'Euclid Beverage', category: "website", description: 'Wordpress website on which I did ', picUrl: 'https://miro.medium.com/max/1400/1*vJgCHEOEJrAn_pU7hVhkKQ.jpeg'},
  //   {id: "3", name: 'Chameleon Resumes Logo', category: "design", description: 'Designed', picUrl: 'https://dl3.pushbulletusercontent.com/WxkuIpp8jndmpTcAP7M4pApM20x79Boh/image.png'},
  //   {id: "4", name: 'Chameleon Resumes Website', category: "website", description: '', picUrl: 'https://miro.medium.com/max/1400/1*vJgCHEOEJrAn_pU7hVhkKQ.jpeg'},
  //   {id: "6", name: 'Luke Sterling Portfolio', category: "react website", description: '', picUrl: 'https://dl3.pushbulletusercontent.com/WxkuIpp8jndmpTcAP7M4pApM20x79Boh/image.png'},
  // ]
  // );
 
  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/tzxa9zvixf6qj")
    .then(res => res.json())
    .then(data => {setProjects(data)})
    .catch(err => console.log(err))
  }, [])

  return (
    <>
    <Navbar />
    <StyledMain>
      <div className="main">
        <div className="hero-content">      
          <div className="hero-bottom">
            <div className="hero-bottom-top">
              <p className="hero-bottom-intro">Hi, my name is</p>
              <h1 className="name">
              Luke Sterling.
              </h1>
            </div>
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
                  <a className="cta-button-hero" href="#projects">
                  <button className="cta-button">My Work</button>
                  </a>
              </div>
          </div>
        </div>                       
      </div>

      {/* Projects Section */}

      {/* Mobile Button Container */}
      <div className="mobile-button-container" id="projects-mobile">
        <div className="mobile-button-left">
          <button>left</button>
        </div>
        <div className="mobile-button-center">
          <h4>{category}</h4>
        </div>
        <div className="mobile-button-right">
          <button>right</button>
        </div>
      </div>
      {/* End Mobile Button Container */}

<div className="toggle-button-container" id="projects">
      <button className="single-button" onClick={()=>{setCategory('react website')}}>Websites</button>
      <button className="single-button" onClick={()=>{setCategory('design')}}>Logos</button>
      <button className="single-button" onClick={()=>{setCategory('')}}>All</button>
</div>
        
        {/* Card */}
      <div className="projects-section">
        <div className="tech-card-container">
        

        {projects.filter((project)=>{return category === project.category}).map((project, index)=>(<div key={`card-${index}`}className="card">
            <div className="crt"></div>
            <div className="card-container">
              <div className="card-contents">
                <div className="crt"></div>
                <div className="card-header">
                  <h1>{item.name}</h1>
                </div>
                <div className="card-image">
                  <img src={item.picUrl} />
                </div>
                <div className="card-body">
                  <p>{item.description}</p>
                </div>
                <div className="card-footer">
                  <span className="created-by"></span>
                </div>
              </div>
            </div>
          </div>))}  
        
      
                      
        </div>
      </div>

      {/* End Projects Section */}


      {/* Start About Me Section */}

      <div className="about-me" id="about">
        <div className="text-wrapper">
          <h1>About Me</h1>
          <p>I have 5 years of javascript and React experience. I am passionate about learning every day and staying ahead of the pack in tech. 
          </p>
          <p>I love technology, business, and psychology, and the intersection of these fields is my playground. I apply interactive human psychology to make intuitive applications which convert sales, solve problems in business, and provide an addictive user experience.</p>
        </div>
      </div>

      {/* End About Me Section */}

      {/* Start Contact Me Section */}

      

      {/* End Contact Me Section */}
      {/* Footer Start */}
      <footer className="footer-section">
        <div className="footer-container">
            <div className="footer-cta pt-5 pb-5">
                <div className="icon-container">
                    <div className="single-icon-container">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt icon-green"></i>
                            <div className="cta-text">
                                <h4>Remote</h4>
                                <span>Based in Chicago</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-icon-container">
                        <div className="single-cta">
                            <i className="fab fa-linkedin icon-green"></i>
                            <a href="https://www.linkedin.com/in/luke-sterling-a191b0247/">
                              <div className="cta-text">
                                  <h4>LinkedIn</h4>
                                  <span>Luke Sterling</span>
                              </div>
                            </a>
                        </div>
                    </div>
                    <div className="single-icon-container">
                        <div className="single-cta">
                            <i className="far fa-envelope-open icon-green"></i>
                            <div className="cta-text">
                                <h4>Email</h4>
                                <span>walker0369@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="footer-content pt-5 pb-5">
                <div className="footer-mid-container">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Developers I follow :</h3>
                        </div>
                        <ul>
                            <li><a href="https://www.youtube.com/c/WesBos">Wes Bos</a></li>
                            <li><a href="https://www.youtube.com/c/WebDevSimplified">Web Dev Simplified</a></li>
                            <li><a href="https://www.youtube.com/c/DevTipsForDesigners">Dev Tips</a></li>
                            <li><a href="https://www.youtube.com/c/LevelUpTuts">Scott Tolinski</a></li>
                            <li><a href="https://www.youtube.com/c/TraversyMedia">Brad Traversy</a></li>
                            <li><a href="https://www.youtube.com/c/Fireship">Fireship.io</a></li>
                            <li><a href="https://www.youtube.com/c/CodingPhase">Coding Phase</a></li>
                            <li><a href="https://www.youtube.com/c/DesignCourse">Gary Simon</a></li>
                            <li><a href="https://www.youtube.com/kepowob">Kevin Powell</a></li>
                            <li><a href="https://www.youtube.com/c/DevEd">Dev Ed</a></li>
                        </ul>
                    </div>
                    
                    <div className="contact">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Contact Me!!!</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Want to get in touch with or hire Luke?</p>
                            </div>
                            <div className="subscribe-form">
                              <form action="https://getform.io/f/9bc3b965-2e11-4a9e-a296-7b1d0bd9203d" method="POST">
                                    <input name="email" type="text" placeholder="Email Address"/>
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-center">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2022, All Rights Reserved <a href="#">Luke Sterling</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </footer>
      {/* Footer End */}
      
      

    </StyledMain>
    </>
  );
}

export default App;
