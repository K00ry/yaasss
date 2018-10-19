import React from 'react';
import {Col, Grid, Row, Thumbnail} from "react-bootstrap";

const About = () => {
    return <>
        <div className="main-page-about container">
            <h2 className="main-page-about__title" data-scroll="toggle(.fromTopIn, .fromBottomOut)">About Zaddy's</h2>
            <p className="main-page-about__p"
                // data-scroll="toggle(.fromRightIn, .fromRightOut)"
            >
                The self-proclaimed “falafel rockers” have cultivated a reputation for
                their bombastic live shows that nail you with a fistful of glitter to
                the face. To prove it, they’ve released “Full Moon Junkies” today, a
                jam perfectly tuned for your next Burning Man acid trip. The band
                shreds and surfs along a surf-rock organ as Dr. FeelAwful speeds
                through a combination of singing, screaming, and howling. Fast,
                furious, and perhaps a bit nonsensical, the track nearly reeks of mosh
                pit sweat.
            </p>


        </div>
        <Grid className="zaddys" >
            <Row className="zaddys_block" >
                <Col  xs={12} sm={6} md={3} className="zaddys_block__item" data-scroll="centerVertical,once,toggle(.scaleDownIn, .scaleDownOut)">


                    <Thumbnail src={process.env.PUBLIC_URL + 'img/closeups/1.jpg'} alt="cover for Full Moon Junkies">
                        <h3 className="zaddys_block__item--title text-center" >Dr. Feel Awful / bass & vocals</h3>
                    </Thumbnail>
                </Col>
                <Col xs={12} sm={6} md={3} className="zaddys_block__item" data-scroll="centerVertical,once,toggle(.scaleDownIn, .scaleDownOut)">
                    <Thumbnail src={process.env.PUBLIC_URL + 'img/closeups/2.jpg'} alt="cover for song money">
                        <h3 className="zaddys_block__item--title text-center" >Rex Malaria / guitar & vocals</h3>
                    </Thumbnail>
                </Col>
                <Col  xs={12} sm={6} md={3} className="zaddys_block__item" data-scroll="centerVertical,once,toggle(.scaleDownIn, .scaleDownOut)">
                    <Thumbnail src={process.env.PUBLIC_URL + 'img/closeups/3.jpg'} alt="cover for Full Moon Junkies">
                        <h3 className="zaddys_block__item--title text-center" >Boo Bubbles / guitar  </h3>
                    </Thumbnail>
                </Col>
                <Col xs={12} sm={6} md={3} className="zaddys_block__item" data-scroll="centerVertical,once,toggle(.scaleDownIn, .scaleDownOut)">
                    <Thumbnail src={process.env.PUBLIC_URL + 'img/closeups/4.jpg'} alt="cover for song money">
                        <h3 className="zaddys_block__item--title text-center" >LePsychoPapaya / drums </h3>
                    </Thumbnail>

                </Col>
            </Row>
        </Grid>
</>
};

export default About;