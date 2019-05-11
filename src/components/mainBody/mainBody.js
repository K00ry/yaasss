import React from 'react';
import * as PropTypes from 'prop-types';
// import {Grid,Row,Col,Thumbnail} from 'react-bootstrap';
import About from '../about/about';
import Music from '../music/music';


const MainBody = () => {
  return (
    <div className="main ">
        <div className="introduction-block">
            <h3 className="introduction-block__text">
                Did you just assume our genre? We are a falafel rock band from
                Brooklyn.
            </h3>
        </div>

        <About/>
        <Music/>




    </div>
  );
};
MainBody.propTypes = { process: PropTypes.func };
export default MainBody;
