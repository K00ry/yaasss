import React, {Component} from 'react';
import { Row} from "react-bootstrap";
import MusicCards from './musicCards'
import axios from 'axios';

class Music extends Component {

    state = {
        musicCards :[],
    };





                componentDidMount() {
                    const url = "https://yaasss-cms.herokuapp.com/music";
                    const localUrl ="http://localhost:1337/music";
                    axios.get(url).then(response =>{
                        console.log(response.data);
                        this.setState({
                            musicCards: response.data
                        })
                    }).catch(err =>{
                        console.log(err);
                    })


                }

    render() {



        return (
            <div className="music" >
                <Row className="music_block" >
                    {this.state.musicCards.map(card => <MusicCards key={card._id}
                                                                  name={card.Name}
                                                                   img={card.img.url}
                                                                  description={card.description}
                                                                  iframe={card.iframe}/>)}

                </Row>

            </div>
        );
    }
}

export default Music;