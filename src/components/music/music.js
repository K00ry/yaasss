import React, {Component} from 'react';
import { Row,Container} from "react-bootstrap";
import MusicCards from './musicCards'
import {Element } from 'react-scroll';
import {connect} from 'react-redux';
import {initFetch} from '../../store/actions/action'

class Music extends Component {



                componentDidMount() {
                    this.props.init();
                }

    render() {



        return (
            <Element name="music" className="music" >
                <h2 className="music__title" data-scroll="toggle(.fromTopIn, .fromBottomOut)">
                    Yaasss's Music
                </h2>

                <Container>
                <Row className="music_block" >
                    {this.props.musicCards.map(card => <MusicCards key={card._id}
                                                                  name={card.Name}
                                                                   img={card.img.url}
                                                                  description={card.description}
                                                                  iframe={card.iframe}/>)}

                </Row>
                </Container>

            </Element>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        musicCards: state.musicCards
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        init:() => dispatch(initFetch())
    }


};
export default connect(mapStateToProps,mapDispatchToProps)(Music);