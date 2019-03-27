import React, { Component } from 'react';
import './App.css';
import Form from "./Form";
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className= "ui card">
            <h1> Feedback </h1>
            <Form />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
