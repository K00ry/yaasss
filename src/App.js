import React, { Component } from 'react';
import Toolbar from './components/toolbar';
import MainBody from './components/mainBody/mainBody';
import  Background from './components/background';
import ScrollTrigger from 'scrolltrigger-classes'
import './App.scss';






class App extends Component {

    componentDidMount(){
            document.addEventListener('DOMContentLoaded', function(){
             new ScrollTrigger();
        });
    }
  render() {
      return (
          <div className="App">
              <Toolbar/>
              <Background/>
              <MainBody/>

          </div>
      );
  }
}

export default App;
