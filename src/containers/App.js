import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
//import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

//
//
// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red': 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
//     color: white;
//   }
// `;

class App extends Component {
  constructor (props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state  = {
      persons: [
      { id: 'aaa122', name: 'Dapson', age: 18},
      { id: 'dscdsd13', name: 'Kayston', age: 22},
      { id: 'gfgfh6645', name: 'Jide', age: 23}
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
    }

    static getDerivedStateFromProps(props, state) {
      console.log('[App.js] getDerivedStateFromProps', props);
      return state;
    } 

    componentDidMount() {
      console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate() {
      console.log('[App.js] shouldComponentUpdate');
      return true;
    }

    componentDidUpdate() {
      console.log('[App.js] componentDidUpdate');
    }
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

      this.setState((prevState, props) => {
        return {
          persons: persons, 
        changeCounter: prevState.changeCounter+1
        }
      });
    };
    

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }

    loginHandler = () => {this.setState({authenticated: true})};

    render () {
      console.log('[App.js] render');
      // const style = {
      //   backgroundColor: 'green',
      //   color: 'white',
      //   font: 'inherit',
      //   border: '1px solid blue',
      //   padding: '8px',
      //   cursor: 'pointer',
      //   ':hover': {
      //     backgroundColor: 'lightgreen',
      //     color: 'white'
      //   } 
      // } 

      let persons = null;

      if (this.state.showPersons) {
        persons = <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler}
              isAuthenticated={this.state.authenticated}
              />
              /* <Person 
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
                age={this.state.persons[2].age}/> */
        
        ;
        // style.backgroundColor = 'red';
        // style[':hover'] = {
        //   backgroundColor: 'salmon',
        //   color: 'white'
        //}; 
      }

      return (
          <Aux>
          <button onClick={() => {
            this.setState({showCockpit: false});
          }}>Remove Cockpit</button>
          <AuthContext.Provider>
           {this.state.showCockpit ? 
           <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}/>
            : null}
              {persons}
            </AuthContext.Provider>
          </Aux> 
          
        
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


export default withClass(App, classes.App);


