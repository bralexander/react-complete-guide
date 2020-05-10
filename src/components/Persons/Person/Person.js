import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import classes from './Person.module.css';
import withClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';
//import { ThemeContext } from 'styled-components';




class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
    console.log('[Person.js] rendering...')
    return (
    /* <div className={classes.Person}> */
        <Aux>
            <AuthContext.Consumer>
            {(context) => 
            context.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p>
            }
            </AuthContext.Consumer>
            <p onClick={this.props.click}>
                I'm {this.props.name} and I am {this.props.age} years old!
            </p>
            <p>{this.props.children}</p>
            <input 
            //ref={(inputEl) => {this.inputElement = inputEl}} 
            ref={this.inputElementRef}
            type="text" 
            onChange={this.props.changed}
            value={this.props.name}/>}
        </Aux>
    );
    }
}
// Warns the user if you pass in any invalid prop types
Person.propTypes = {
    clicks: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);