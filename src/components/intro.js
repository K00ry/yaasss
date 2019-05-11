import React from 'react';
import Sizes from 'react-sizes';

const Intro = props => {

    let isMobile = <img
        // data-scroll="centerVertical,toggle(.fromTopIn, .fromTopOut), offset(-100,0)"
        className="logoBlock__img"
        alt="logo of the band"
        src={process.env.PUBLIC_URL + 'img/yaasss-logo-mob.png'}
    />;
    let isDesktop = <img
        // data-scroll="centerVertical,toggle(.fromTopIn, .fromTopOut), offset(-100,0)"
        className="logoBlock__img"
        alt="logo of the band"
        src={process.env.PUBLIC_URL + 'img/yaasss-logo3.png'}
    />;
  return (
    <div className="intro">
      <div className="logoBlock">
          {props.isMobile ? isMobile : isDesktop}
      </div>
    </div>
  );
};

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 766,
});
export default Sizes(mapSizesToProps)(Intro);
