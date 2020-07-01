import React, { Component } from 'react'; 
//import Radium from 'radium';
//import styled from 'styled-components';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
    render () {
        console.log('[Person.js] rendering...')
     return (
        // <div className="Person" style={style}>
        //<div className={classes.Person}>
            <Aux>
                <p  onClick= {this.props.click}>My name is {this.props.name} and {this.props.age} years old</p>,
                <p key="bk45">{this.props.children}</p>,
                <input key="vg34" type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux> 
     )
        //</div>
             
    }
    
};

export default Person;