import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Somu" age="19" />
        <Person name="Somya" age="18" >My Hobbies: Dancing </Person>
      </div>
    );
  }
}
export default App;