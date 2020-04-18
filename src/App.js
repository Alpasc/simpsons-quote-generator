import React from 'react';
import axios from 'axios';
import './App.css';
import DisplayQuote from './components/DisplayQuote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: ""
    };
    this.getQuote = this.getQuote.bind(this)
  }

  getQuote() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState ({
          quotes: data[0],
        });
      });
  }

  render () {
    return (
      <div className="App">
        <DisplayQuote quotes={this.state.quotes} />
        <button type='button' onClick={this.getQuote}>Another one !</button>
      </div>
    );
  }  
}

export default App;
