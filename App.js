import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
//les images import 
import img1 from './ressources/information.png';
import boule1 from './ressources/icons/geolocalisation.png';
import boule2 from './ressources/icons/distance.png';
import boule3 from './ressources/icons/mobile1.png';
import boule4 from './ressources/icons/mobile2.png';

import content1 from './ressources/images/1.jpg';
import content2 from './ressources/images/2.png';
import content3 from './ressources/images/3.jpg';
import content4 from './ressources/images/4.png';

import footer1 from './ressources/icons/instagram.png';
import footer2 from './ressources/icons/facebook.png';
import footer3 from './ressources/icons/twitter.png';
import footer4 from './ressources/icons/youtube.png';

//import React from 'react';

class HeaderComponent extends React.Component {

  render() {
    const theUrl = new URL("./ressources/bgimg.png", import.meta.url);
    return (
      <header>
        <div className="gdiv">
          <div class="custom-shape-divider-bottom-1651479188">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
          </div>        

          <div className="t1">
            <p className="deli">Deli</p>
          </div>

          <div  className="t2">
            <p className="bouff">Bouff</p>
          </div>

          <div className="buttonsdiv">
            <button className="Home">
              <p className="phome">Home</p>
            </button>
            <button className="aboutus">
              <p className="pbutton">A propos</p>
            </button>
            <button className="getstarted">
              <p className="pbutton">telecharger</p>
            </button>
          </div>
          <img className="question" src={img1}/>
        </div>

        <div className="contenuH">
          <p className="titleH">Titre de la page</p>
          <p className="paragrapheH"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
        </div>      
      </header>
    )
  }
}

class MainComponent extends React.Component {

  render() {
    //init

    return (
      <main>
        <div className="globalmain">
          <div className="textmain">
            <span className="boule">
              <img className="b1" src={boule1}/>

              <div className="textB">
                <p className="titleb">Titre boule</p>
                <p className="descb">Lorem ipsum dolor sit amet</p>
              </div>

            </span>

            <span className="boule">
              <img className="b1" src={boule2}/>
              <div className="textB">
                <p className="titleb">Titre boule</p>
                <p className="descb">Lorem ipsum dolor sit amet</p>
              </div>
            </span>

            <span className="boule">
              <img className="b1" src={boule3}/>
              <div className="textB">
                <p className="titleb">Titre boule</p>
                <p className="descb">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              </div>
            </span>
          </div>
        </div>

        <div className="imgtextdivref">
          <img src={content1} className="imgcontent"/>
          <div className="caca">
            <p className="pcontentitle">Un Titre</p>
            <p className="pcontent">Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet Lorem ipsum dolor</p>
          </div>
        </div>

        <div className="imgtextdiv">
          <div className="caca">
            <p className="pcontentitle">Un Titre</p>
            <p className="pcontent">Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet Lorem ipsum dolor</p>
          </div>
          <img src={content2} className="imgcontent"/>
        </div>

        <div className="imgtextdiv">
          <img src={content3} className="imgcontent3"/>
          <div className="caca">
            <p className="pcontentitle">Un Titre</p>
            <p className="pcontent">Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet Lorem ipsum dolor</p>
          </div>
        </div>

        <div className="imgtextdiv">
          <div className="caca">
            <p className="pcontentitle">Un Titre</p>
            <p className="pcontent">Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor sit amet Lorem ipsum dolor</p>
          </div>
          <img src={content4} className="imgcontent"/>
        </div>
        
      </main>
    )
  }
}

class FooterComponent extends React.Component {

  render() {
    return (
      <footer>
        <div className="footerC">
          <h3 className="footertitle">DeliBouff'  bas de page</h3>
          <p className="footerdesc">Vous pouvez nous suivre sur ces réseaux sociaux</p>
        </div>

        <div>
          <ul className="footereseaux">
            <li ><a href="#"><img className="ficons" src={footer1}/></a></li>
            <li><a href="#"><img className="ficons" src={footer2}/></a></li>
            <li><a href="#"><img className="ficons" src={footer3}/></a></li>
            <li><a href="#"><img  className="ficons" src={footer4}/></a></li>
          </ul>
        </div>

        <div className="enbasla">
          <p>&copy;2019-2022 DeliBouff', Designed by <span>Guillaume lf</span></p>
        </div>
      </footer>
    )
  }
}
function App() {  
  return (
    <div>
      <HeaderComponent>
      </HeaderComponent>

      <MainComponent>
      </MainComponent>

      <FooterComponent>
      </FooterComponent>
    </div>
  )
}

export default App;
 