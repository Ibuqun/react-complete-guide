import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state  = {
      persons: [
      { id: 'aaa122', name: 'Dapson', age: 18},
      { id: 'dscdsd13', name: 'Kayston', age: 22},
      { id: 'gfgfh6645', name: 'Jide', age: 23}
    ],
    showPersons: false
    };

    /*switchNameHandler = (newName) => {
      //console.log('was clicked!');
      // DO NOT DO THIS --> this.state.persons[0].name = 'Ibukunoluwa';
      this.setState({
        persons: [
          { name: newName, age: 17},
          { name: 'Kayston', age: 22},
          { name: 'Jide', age: 23}
        ],
      })
    } */

    deletePersonHandler = personIndex => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    }
    
    nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }

    render () {

      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer' 
      }

      let persons = null;

      if (this.state.showPersons) {
        persons = (
            <div>
              {this.state.persons.map ((person, index) => {
                return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
                />
              })}
              {/* <Person 
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
                age={this.state.persons[2].age}/> */}
            </div>
        )
      }

      return (
        <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p>This is really working</p>
          <button
            style={style} 
            onClick= {this.togglePersonsHandler}>Toggle Names</button>
            {persons}
        </div>
      );
  }
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

// class App extends Component {
//   state = {
//     username: "Superkayston"
//   };

//   nameChangeHandler = (event) => {
//     this.setState ({
//       username: event.target.value
//     });
//   };

//   render () {
//     return (
//       <div>
//         <UserInput userName={this.state.username} changed = {this.nameChangeHandler}/>
//         <UserOutput userName={this.state.username}/> 
//         <UserOutput userName={this.state.username}/>
//         <UserOutput userName={this.state.username}/>

//       </div>
//     )
//   }
// };


 export default App;


