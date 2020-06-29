import React, { Component } from 'react'; 
//import Radium from 'radium';
//import styled from 'styled-components';
import classes from './Person.css';

class Person extends Component {
    render () {
        console.log('[Person.js] rendering...')
     return (
        // <div className="Person" style={style}>
        <div className={classes.Person}>
                <p onClick= {this.props.click}>My name is {this.props.name} and {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/> 
        </div>
            )
    }
    
};

export default Person;