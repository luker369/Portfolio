import styled from "styled-components";

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
  .hero-content {
    margin-left: ;
  }
  @media (max-width: 700px) {
    .hero-content {
      margin-left: 1em;
    }
  }
  .hero-bottom {
    background: #111827;
    color: #fff;
    height: 64vh;
    font-family: "Silkscreen", cursive;
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
    font-size: 1.5rem;
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
    width: 7.5em;
    height: 3em;
    border: 2px solid #00df9a;
    border-radius: 3px;
    background: #475569;
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
    padding-bottom: 6em;
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
    background: transparent;
    color: white;
    font: bold;
    border: 2px solid #00df9a;
    border-radius: 3px;
    width: 7em;
    height: 2.25em;
  }
  .toggle-button-container button:hover {
    color: #00df9a;
    transition: all ease 400ms;
  }

  .projects-section {
    background: #111827;
  }

  @media (min-width: 670px) {
    .tech-card-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      overflow-x: hidden;
      overflow-y: scroll;
      justify-content: center;
      gap: 1.25em 1em;
      ${"" /* filter: drop-shadow(0px 0px 20px rgba(0, 150, 255, 1)); */}
      padding-top: 3em;
    }
  }

  .card-contents {
    width: 350px;
    max-width: 500px;
    margin: 0 auto;
    background: rgba(0, 0, 50, 0.7);
    position: relative;
    justify-content: middle;
    align-content: center;
  }

  .card-header {
    margin: 0;
    color: white;
    padding: 1rem;
    text-align: center;
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
    text-align: left;
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

  

  .about-me {
    max-height: auto;
    background: #111827;
    color: #fff;
    padding: 4em;
    z-index: 1;
  }

  .about-me > .text-wrapper {
    width: 81vw;
    margin: auto;
  }
  @media (max-width: 700px) {
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
    /* color: #efefef; */
  }
  @media (max-width: 700px) {
    .text-wrapper > p {
      font-size: 1.2em;
      /* color: #efefef; */
      max-width: 15em;
    }
  }
  @media (min-width: 701px) and (max-width: 1000px) {
    .text-wrapper > p {
      font-size: 1.2em;
      /* color: #efefef; */
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
  @media (max-width: 700px) {
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

  .single-icon-container:nth-child(2) {
    justify-content: center;
  }
  .single-icon-container:nth-child(3) {
    justify-content: flex-end;
  }
  @media (max-width: 700px) {
    .icon-container .single-icon-container {
      width: 100%;
      display: flex;
    }
    /* Second Single-Icon-Container */

    .single-icon-container:nth-child(2) {
      justify-content: flex-start;
    }
    .single-icon-container:nth-child(3) {
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
  @media (max-width: 700px) {
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
    font-family: "Poppins", sans-serif;
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
  .facebook-bg {
    background: #3b5998;
  }
  .twitter-bg {
    background: #55acee;
  }
  .google-bg {
    background: #dd4b39;
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
  .footer-widget ul li a:hover {
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
    background: #2e2e2e;
    border: 1px solid #2e2e2e;
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
  .copyright-area {
    background: #202020;
    padding: 25px 0;
  }
  .copyright-text p {
    margin: 0;
    font-size: 14px;
    color: #878787;
  }
  .copyright-text p a {
    color: #00df9a;
  }
  .footer-menu li {
    display: inline-block;
    margin-left: 20px;
  }
  .footer-menu li:hover a {
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
  @media (max-width: 700px) {
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
  @media (max-width: 700px) {
    .footer-mid-container {
      display: flex;
      flex-direction: column;
      padding: 2em 4em 2em 4em;
    }
  }
  @media (max-width: 700px) {
    .contact {
      margin-top: 2em;
      margin-bottom: 0;
    }
  }
  /* Bootstrap Footer End */

  #red {
    color: red;
  }

  #yellow {
    color: yellow;
  }

  [data-toggled="true"] {
    color: blue;
  }

  [data-toggled="false"] {
    color: green;
  }
`;

export default StyledMain;
