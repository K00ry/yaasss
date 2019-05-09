import React, { Component } from 'react';
import Toolbar from './components/toolbar';
import MainBody from './components/mainBody/mainBody';
import  Background from './components/background';
import ScrollTrigger from 'scrolltrigger-classes'
import AboutZaddy from './components/about/aboutZaddy'
import './App.scss';






class App extends Component {

    componentDidMount(){
            document.addEventListener('DOMContentLoaded', function(){
             new ScrollTrigger();
        });
    }
  render() {
      return (
          <div className="App">

              <Toolbar/>
              <Background/>
              <MainBody/>
              <AboutZaddy/>
              <footer >
                  <div className="social-icons ">
                      <a
                          href="https://www.facebook.com/69YAASSS69/"
                          className="social-icons__a"
                      >
                          <img
                              className="social-icons__a--img"
                              alt="social media icon facebook"
                              src={process.env.PUBLIC_URL + 'img/svg/facebook.svg'}
                          />
                      </a>
                      <a

                          href="https://www.instagram.com/69yaasss69/?hl=en"
                          className="social-icons__a"
                      >
                          <img
                              className="social-icons__a--img"
                              alt="social media icon insta"
                              src={process.env.PUBLIC_URL + 'img/svg/insta.svg'}
                          />
                      </a>
                      <a
                          href="https://open.spotify.com/artist/7t5UjlneDkGh2TBuZR0P8x"
                          className="social-icons__a"
                      >
                          <img
                              className="social-icons__a--img"
                              alt="social media icon spotify"
                              src={process.env.PUBLIC_URL + 'img/svg/spotify.svg'}
                          />
                      </a>
                  </div>
              </footer>

          </div>
      );
  }
}

export default App;
