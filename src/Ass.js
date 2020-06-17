import React, { Component } from 'react';
import './Ass.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';


class Ass extends Component {

    state = {
        userInput: ''
    }

    inputChangedHandler = (event) => {
        this.setState ({userInput: event.target.value});
    }

    delCharHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText});
    }
    render () {
        const charList = this.state.userInput.split('').map((ch, index) => {
            return <Char character={ch} 
            key={index}
            clicked={() => this.delCharHandler(index)}/>
        })
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '4px',
            cursor: 'pointer',
            margin: '48px auto' 
          }
        return (
        <div className="ipt">
            <input type="text" style={style} onChange={this.inputChangedHandler} 
            value= {this.state.userInput}/>
            <p>{this.state.userInput}</p>
            <Validation inputLength={this.state.userInput.length}/>
            {charList}
        </div>
        )
    }
}

export default Ass;