import './App.css';
import { Component } from 'react';

import GuessedWords from "./GuessedWords"
import Congrats from "./Congrats"


class App extends Component {
  render(){
    return (
      <div className="container" data-test="component-app">
        <h1>Jotto</h1>
        <Congrats success={false}/>
        <GuessedWords guessedWords={[
          {guessedWord:'train',letterMatchCount:3},
          {guessedWord:'agile',letterMatchCount:1},
          {guessedWord:'party',letterMatchCount:5}
        ]}/>
      </div>
    );
  }

}

export default App;
