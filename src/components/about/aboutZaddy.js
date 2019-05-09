import React, {Component} from 'react';
import {Element } from 'react-scroll';

class AboutZaddy extends Component {




    render() {

        return (
            <Element name="about" className="main-page-about">
                <div className="container">
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
            </Element>
        );
    }
}

export default AboutZaddy;
