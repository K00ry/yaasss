import React from 'react';

const Intro = () => {
  return (
    <div className="intro">
      <div className="logoBlock">
        <img
            data-scroll="toggle(.fromTopIn, .fromTopOut)"
          className="logoBlock__img"
          alt="logo of the band"
          src={process.env.PUBLIC_URL + 'img/logo2.png'}
        />
      </div>
    </div>
  );
};

export default Intro;
