import React from 'react';
import {Card, Container, Row,Col} from "react-bootstrap";

const About = () => {
    return <>
        <div className="main-page-about ">
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
        <Container className="zaddys" >
            <Row className="zaddys_block" >
                <Col  xs={12} sm={6}  className="zaddys_block__item" data-scroll="centerVertical,once,toggle(.scaleDownIn, .scaleDownOut)">


                    <Card.Img src={process.env.PUBLIC_URL + 'img/closeups/1-l.jpg'} alt="cover for Full Moon Junkies"/>
                        <Card.Title className="zaddys_block__item--title text-center" >Dr. Feel Awful / bass & vocals</Card.Title>
                </Col>
                <Col xs={12} sm={6}  className="zaddys_block__item" data-scroll="centerVertical,once,toggle(.scaleDownIn, .scaleDownOut)">
                    <Card.Img src={process.env.PUBLIC_URL + 'img/closeups/2-l.jpg'} alt="cover for song money"/>
                        <Card.Title className="zaddys_block__item--title text-center" >Rex Malaria / guitar & vocals</Card.Title>

                </Col>
                <Col  xs={12} sm={6}  className="zaddys_block__item" data-scroll="centerVertical,once,toggle(.scaleDownIn, .scaleDownOut)">
                    <Card.Img src={process.env.PUBLIC_URL + 'img/closeups/3-l.jpg'} alt="cover for Full Moon Junkies"/>
                        <Card.Title className="zaddys_block__item--title text-center" >Boo Bubbles / guitar  </Card.Title>

                </Col>
                <Col xs={12} sm={6}  className="zaddys_block__item" data-scroll="centerVertical,once,toggle(.scaleDownIn, .scaleDownOut)">
                    <Card.Img src={process.env.PUBLIC_URL + 'img/closeups/4-l.jpg'} alt="cover for song money"/>
                        <Card.Title className="zaddys_block__item--title text-center" >LePsychoPapaya / drums </Card.Title>
                </Col>
            </Row>
        </Container>
</>
};

export default About;