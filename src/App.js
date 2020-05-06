import React, { Component } from 'react';
//import Radium, { StyleRoot } from 'radium';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      {id:'asfa1', name: 'Brad', age: 26},
      {id:'vasdf1', name: 'Danny', age:26},
      {id:'asdf11', name: 'Melisa', age:25}
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //const person = {...this.state.persons[personIndex]};

    const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value; 

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); //creates a  copy of the name list before editing it using .slice()
    //const persons = [...this.state.persons]; //ES6 spread operator -- does the same as .slice()
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {showPersons: !doesShow} );
  }

 
  render () {
    const style = {
      
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event,person.id)}/>
          })} 
      </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let classes =[];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');// red and bold bc 2 if's
    }

    return (
      
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button className='button'
          onClick={this.togglePersonsHandler}>Toggle Person
          </button> 
          {persons}
        </div>
      
    
  );
 }
}

export default App;  


