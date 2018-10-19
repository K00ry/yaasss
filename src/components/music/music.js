import React from 'react';
import {Col, Grid, Row, Thumbnail} from "react-bootstrap";

const Music = () => {
    return (
        <Grid className="music" >
            <Row className="music_block" >
                <Col  sm={6} className="music_block__item">


                    <Thumbnail src={process.env.PUBLIC_URL + 'img/11.jpg'} alt="cover for Full Moon Junkies">
                        <h3 className="music_block__item--title" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">first single “Full Moon Junkies”</h3>
                        <p className="music_block__item--description" data-scroll="toggle(.fromRightIn, .fromRightOut)">Shhhhhhhhh, can you here that noise? It's the sizzling sound of crispy Falafels of Brooklyn, YAASSS.</p>
                        <iframe title="fullMoon" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/406816965&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"/>
                    </Thumbnail>
                </Col>
                <Col sm={6} className="music_block__item">

                    <Thumbnail src={process.env.PUBLIC_URL + 'img/13.jpg'} alt="cover for song money">
                        <h3 className="music_block__item--title" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">YAASSS “$Money$”</h3>
                        <p className="music_block__item--description" data-scroll="toggle(.fromRightIn, .fromRightOut)">A couple more Stooges-esque BDSM references later, “$Money$” provides a colorful commentary on the power of cold hard cash, culminating with Rex Malaria stating that, with this forthcoming currency, YAASSS will be able to “put you in a cuckold and make you watch me” while also having grapes fed to them in a hot bath."Alt Citizen"</p>
                        <iframe title="money" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/406816965&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"/>
                    </Thumbnail>

                </Col>
            </Row>

        </Grid>
    );
};

export default Music;