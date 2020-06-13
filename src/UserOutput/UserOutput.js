import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username is {props.userName}</p>
            <p onClick= {props.click}>Hello, I am new here.</p>
        </div>
    )
};

export default userOutput;