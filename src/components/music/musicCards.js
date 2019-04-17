import React from 'react';
import {Card, Col} from "react-bootstrap";

const MyComponent = props => {
    return (
        <Col  sm={6} className="music_block__item">
            <Card >
                <Card.Img variant="top" src={props.img} alt="cover for Full Moon Junkies" />
                <Card.Body>
                    <Card.Title className="music_block__item--title" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">{props.name}</Card.Title>
                    <Card.Text className="music_block__item--description" data-scroll="toggle(.fromRightIn, .fromRightOut)">{props.description}</Card.Text>
                    <div dangerouslySetInnerHTML={{ __html: props.iframe}}/>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MyComponent;
