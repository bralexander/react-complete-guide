import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) => {
    const assignedClasses =[];
    let btnClass = '';

    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
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
export default cockpit;