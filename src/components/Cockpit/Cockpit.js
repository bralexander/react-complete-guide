import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // const timer = setTimeout(() =>{
    //   alert('Saveddatatocloud!');
    // }, 1000);
    toggleBtnRef.current.click(); // called here so there is delay
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []); // only executes on 1st change

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return() => {
      console.log('[Cockpit.js] clean up work in second useEffect')
    }
  })

    const assignedClasses =[];
    let btnClass = '';

    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);// red and bold bc 2 if's
    }

    return(
    <div className={classes.Cockpit}>
      <h1>{props.mainTitle}</h1>
      <h2>Hi, I'm a React App</h2>
      <h3>It is {props.time}</h3>
      <p className={assignedClasses.join(' ')}>
        This is really working</p>
      <button ref={toggleBtnRef}
      className={btnClass} onClick={props.clicked}>
        Toggle Person
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div> 
    );
};


export default React.memo(Cockpit);