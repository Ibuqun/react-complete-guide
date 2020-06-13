import React from 'react';

const userInput = (props) => {
    const style = {
        border: '2px solid green'
    }
    return (
        <div>
            <input type="text" style = {style} onChange={props.changed} value={props.userName}/>
        </div>
    )
};

export default userInput;