import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state  = {
      persons: [
      { name: 'Dapson', age: 18},
      { name: 'Kayston', age: 22},
      { name: 'Jide', age: 23}
    ],
    };

    switchNameHandler = (newName) => {
      //console.log('was clicked!');
      // DO NOT DO THIS --> this.state.persons[0].name = 'Ibukunoluwa';
      this.setState({
        persons: [
          { name: newName, age: 17},
          { name: 'Kayston', age: 22},
          { name: 'Jide', age: 23}
        ]
      })
    }
    
    nameChangeHandler = (event) => {
      this.setState({
        persons: [
          { name: 'Dapson', age: 17},
          { name: event.target.value, age: 22},
          { name: 'Jide', age: 23}
        ]
      });
    }

    render () {

      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer' 
      }

      return (
        <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p>This is really working</p>
          <button
            style={style} 
            onClick= {this.switchNameHandler.bind(this, 'Kayst!')}>Switch Name</button>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'IBK!')}
          changed={this.nameChangeHandler}>
          My hobbies: Racing, Kayaking</Person>
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
        </div>
      );
  }
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
   

}


export default App;


