import React, { useEffect } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    const timer = setTimeout(() =>{
      alert('Saveddatatocloud!');
    }, 1000);
    return () => {
      clearTimeout(timer)
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

    return(<div className={classes.Cockpit}>
        <h1>{props.mainTitle}</h1>
        <h2>Hi, I'm a React App</h2>
        
    <p className={assignedClasses.join(' ')}>
      This is really working</p>
    <button 
    className={btnClass}
    onClick={props.clicked}>Toggle Person
    </button>
    </div> )
}
export default React.memo(Cockpit);