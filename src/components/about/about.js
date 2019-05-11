import React from 'react';
import {Card, Container, Row,Col} from "react-bootstrap";

const About = () => {
    return <>
        <div className="zaddys">
            <h2 className="zaddys__title">
                Meet Zaddy's
            </h2>

        <Container  >
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
        </div>
</>
};

export default About;