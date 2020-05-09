import React, { Component } from 'react';
//import Radium, { StyleRoot } from 'radium';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      {id:'asfa1', name: 'Brad', age: 26},
      {id:'vasdf1', name: 'Danny', age:26},
      {id:'asdf11', name: 'Melisa', age:25}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      );
    }
    
    return (
        <div className={classes.App}>
          <button onClick={() => {
            this.setState({showCockpit: false});
        }}>RemoveCockpit</button>
          {this.state.showCockpit ? (
          <Cockpit showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler} 
          mainTitle={this.props.appTitle}
          />
          ) : null}
          {persons}
        </div>
  );
 }
}

export default App;  


