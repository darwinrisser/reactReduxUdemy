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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
      {name: newName, age: 28},
      {name: 'manu', age: 32}
    ]})
  }

  nameChangedHandler=(event)=>{
    this.setState({
      persons: [
      {name: 'MAAAX', age: 28},
      {name: event.target.value, age: 29}      
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Sup bitches</h1>
        <p>Dafuq</p>
        <button onClick={()=> this.switchNameHandler('Maximo!!!!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler}>
          <h1>Hobbies: gaming</h1>
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maximo')}
          changed={this.nameChangedHandler} />
      </div>

    );
  }
}

export default App;
