import React, { Component } from 'react';
import './App.css';
import Person from './Person'

class App extends Component {
  state = {
    persons: [
      {name: 'max', age: 28},
      {name: 'manu', age: 32}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
      {name: 'maximo', age: 28},
      {name: 'manu', age: 32}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Sup bitches</h1>
        <p>Dafuq</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}><h1>Hobbies: gaming</h1></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>

    );
  }
}

export default App;
