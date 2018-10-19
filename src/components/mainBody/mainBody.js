import React from 'react';
import * as PropTypes from 'prop-types';
import {Grid,Row,Col,Thumbnail} from 'react-bootstrap';
import About from '../about/aboutZaddys';
import Music from '../music/music';


const MainBody = () => {
  return (
    <div className="main">
        <div className="introduction-block">
            <h3 className="introduction-block__text">
                Did you just assume our genre? We are a falafel rock band from
                Brooklyn.
            </h3>
        </div>

        <About/>
        <Music/>



      <footer >
        <div className="social-icons container">
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
};
MainBody.propTypes = { process: PropTypes.func };
export default MainBody;
