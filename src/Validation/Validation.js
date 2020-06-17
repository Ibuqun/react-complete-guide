import React from 'react';

const validation = props => {
    let displayParagragh;
    if (props.inputLength > 5) {
        displayParagragh = <p>Text too long </p>
    } else (
        displayParagragh = <p>Text too short</p>
    )
    return (
        <div>
            {displayParagragh}
        </div>
    )
}

export default validation;