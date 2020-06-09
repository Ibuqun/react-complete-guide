import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app =  props => {
  const [personsState, setPersonsState] = useState ( {persons: [
    { name: 'Dapson', age: 18},
    { name: 'Kayston', age: 22},
    { name: 'Jide', age: 23}
              ],
    otherState: 'some other value'});

    const switchNameHandler = () => {
      //console.log('was clicked!');
      // DO NOT DO THIS --> this.state.persons[0].name = 'Ibukunoluwa';
      setPersonsState({
        persons: [
          { name: 'Ibukunoluwa', age: 17},
          { name: 'Ibukun', age: 21},
          { name: 'IBK', age: 20}
        ]
      })
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working</p>
        <button onClick= {switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing, Kayaking</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
   

}


export default app;


