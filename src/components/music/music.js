import React, {Component} from 'react';
import { Row,Container} from "react-bootstrap";
import MusicCards from './musicCards'
// import axios from 'axios';
import {connect} from 'react-redux';
import {initFetch} from '../../store/actions/action'

class Music extends Component {



                componentDidMount() {
                    this.props.init();
                }

    render() {



        return (
            <div className="music" >
                <h2 className="music__title">
                    Yaasss's Music
                </h2>

                <Container>
                <Row className="music_block" >

                    {/*<button onClick={this.props.init}> sallam</button>*/}
                    {this.props.musicCards.map(card => <MusicCards key={card._id}
                                                                  name={card.Name}
                                                                   img={card.img.url}
                                                                  description={card.description}
                                                                  iframe={card.iframe}/>)}

                </Row>
                </Container>

            </div>
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