import styled from 'styled-components';

const StyledMain = styled.div`

    box-sizing: border-box;
    overflow-x: hidden;
    max-width: 100vw;

  .main {
    background: #111827;
    padding-left: 3em;
    padding-top: 6em;
    height: 37em;
  }
  .hero-content{
    margin-left: 
  }
  @media(max-width: 700px){
    .hero-content{
    margin-left: 1em;
  }
  }
  .hero-bottom {
    background: #111827;
    color: #fff;
    height: 64vh;
    font-family: 'Silkscreen', cursive;
    line-height: 5em;
    margin: 1em 0 0 3em;
  }
  @media (max-width: 700px) {
    .hero-bottom {
        line-height: 1;
        padding: 0 0 0 1em;
        margin: 1em 0 0 0;
    }
    .main {
      padding-left: 2em;
      padding: 2em 0 2em 0em;
      box-sizing: border-box;
      overflow-x: hidden;
      max-width: 100vw;


    }
  }
.hero-bottom-intro {
  color: #00df9a;
  line-height: 2em;
}
.hero-bottom-top {
    padding-bottom: 1.32em;
  }
  .name {
    font-size: 3.7rem;
    
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
        margin: 1em;
    }
}
  .buzz-words {
    filter: brightness(1.4) contrast(1.5);
  }
  .cta-button-hero { 
    padding: 0.3em 0.5em;
    background: transparent;
    width: 7.5em;
    height: 3em;
    border: 2px solid #00df9a;
	  border-radius: 3px;
  }
  .cta-button-hero:hover {
    color: #00df9a;
    transition: all ease 400ms;
  }
  .cta-button {
    margin-top: -2em;
    outline: 0;
    
  }
@media (max-width: 700px) {
    .cta-button {
        margin-top: 4em;
    }
}

/*Start Tech Card Styles*/

.toggle-button-container {
  display: flex;
  justify-content: center;
  gap: 3em;
  background: #111827;
  padding-bottom: 2em;
}
.mobile-button-container {
    display: none;
  }
@media (max-width: 700px) {
  .toggle-button-container {
    display: none;
  }
  .mobile-button-container {
    display: flex;
    justify-content: space-around;
  }
}
.toggle-button-container button {
  background: #475569;
  color: white;
  font: bold;
  border-radius: 14px;
  padding: 5px 7px;
  outline: 2px solid #00df9a;
  min-width: 5em;
}

.projects-section {
    height: 90vh;
    background: #111827;
}

.tech-card-container {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  justify-content: center;
  gap: 1.5em 5em;
  filter: drop-shadow(0px 0px 20px rgba(0, 150, 255, 1));
  padding-top: 3em;
}

.card-container {
  zoom: 0.8;
  max-width: 400px;
  max-height: 400px;
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
  width: 350px;
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

  /*End Tech Card Styles*/

.about-me {
  height: 80vh;
  background: #111827;
  color: #fff;
  padding: 4em;
}

.about-me > .text-wrapper {
  width: 81vw;
  margin: auto;
}
@media(max-width: 700px){
  .about-me > .text-wrapper {
  margin: -1.5em;
}
}
.text-wrapper > h1 {
  font-size: 2em;
  color: #efefef;
  border: bottom;
}
.text-wrapper > p {
  width: 50em;
  font-size: 1.2em;
  color: #efefef;
}
@media(max-width: 700px){
  .text-wrapper > p {
  font-size: 1.2em;
  color: #efefef;
  max-width: 15em;
}
}
@media(min-width: 701px) and (max-width: 1000px){
  .text-wrapper > p {
  font-size: 1.2em;
  color: #efefef;
  max-width: 30em;
}
}
  /* Bootstrap Footer Start */
  
footer ul {
    margin: 0px;
    padding: 0px;
}
.footer-section {
  background: #151414;
  
}
.footer-cta {
  border-bottom: 1px solid #373636;
  padding-top: 5px;
  width: 100%;
}
.icon-container {
  display: flex;
}
@media(max-width: 700px){
  .icon-container {
  display: flex;
  flex-direction: column;
  gap: 4.5em;
}
}

.icon-container .single-icon-container {
  width: 33.33%;
  display: flex; 
}
  /* Second Single-Icon-Container */

.single-icon-container:nth-child(2){
  justify-content: center;
}
.single-icon-container:nth-child(3){
  justify-content: flex-end;
}
@media(max-width: 700px){
  .icon-container .single-icon-container {
  width: 100%;
  display: flex; 
}
  /* Second Single-Icon-Container */

.single-icon-container:nth-child(2){
  justify-content: flex-start;
}
.single-icon-container:nth-child(3){
  justify-content: flex-start;
}
}

.single-cta i {
  color: #ff5e14;
  font-size: 30px;
  float: left;
  margin-top: 8px;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
@media(max-width: 700px){
  .cta-text {
  padding-left: 15px;
  display: inline-block;
}
}
.cta-text h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: #757575;
  font-size: 15px;
}
.footer-content {
  position: relative;
  z-index: 2;
}
.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}
.footer-logo {
  margin-bottom: 30px;
}
.footer-logo img {
    max-width: 200px;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
      color: #7e7e7e;
  line-height: 28px;
}
.footer-social-icon span {
  color: #fff;
  display: block;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: #fff;
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}
.facebook-bg{
  background: #3B5998;
}
.twitter-bg{
  background: #55ACEE;
}
.google-bg{
  background: #DD4B39;
}
.footer-widget-heading h3 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: #00df9a;
}
.footer-widget ul li {
  display: inline-block;
  float: left;
  width: 50%;
  margin-bottom: 12px;
}
.footer-widget ul li a:hover{
  color: #00df9a;
}
.footer-widget ul li a {
  color: #878787;
  text-transform: capitalize;
}
.subscribe-form {
  position: relative;
  overflow: hidden;
  
}
.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: #2E2E2E;
  border: 1px solid #2E2E2E;
  color: #fff;
}
.subscribe-form button {
    position: absolute;
    right: 0;
    background: #00df9a;
    padding: 13px 20px;
    border: 1px solid #ff5e14;
    top: 0;
}
.subscribe-form button i {
  color: #fff;
  font-size: 22px;
  transform: rotate(-6deg);
}
.copyright-area{
  background: #202020;
  padding: 25px 0;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: #878787;
}
.copyright-text p a{
  color: #00df9a;
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a{
  color: #ff5e14;
}
.footer-menu li a {
  font-size: 14px;
  color: #878787;
}
.single-cta > .icon-green {
  color: #00df9a;
}
.footer-container {
  padding: 6.3em 6.3em 0em 6.3em;
}
@media(max-width: 700px){
  .footer-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 6.3em;
}
}
.footer-mid-container {
  display: flex;
  padding: 6.3em;
}
@media(max-width: 700px){
  .footer-mid-container {
  display: flex;
  flex-direction: column;
  padding: 2em 4em 2em 4em;
}
}
@media(max-width: 700px){
  .contact{
    margin-top: 2em;
    margin-bottom: 0;
  }
}
   /* Bootstrap Footer End */
`;

export default StyledMain