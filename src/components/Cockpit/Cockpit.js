import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
  const toggleBtnRef = useRef(null);

    useEffect(() => {
      console.log('[Cockpit.js] useEffect')
      //Http request should be here...
      // setTimeout(() => {
      //   alert('Saved data to cloud!');
      // }, 1000);
      toggleBtnRef.current.click();
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] 2nd cleanup work in useEffect');
      }
    });

    const assignedClasses = [];
    let btnClasses = '';

    if (props.showPersons) {
        btnClasses = classes.Red;
    }
    
      if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); //classes = ['red']
      }
      if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold); //classes = ['red', 'bold']
      }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                ref={toggleBtnRef}
                className={btnClasses}
                onClick= {props.clicked}>  
                    Toggle Person
            </button>
            <button onClick={props.login}>Log in</button>
        </div>
    )
}

export default React.memo(cockpit);