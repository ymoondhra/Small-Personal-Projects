import React, { Component } from 'react';

import HomePage from './Homepage.js';
import NavBar from './NavBar/NavBar.js';
import Ingredients from './Ingredients.js';
import About from './About.js';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
    constructor() {
        super();
        this.state = { width: 0 };
        this.setSize = this.setSize.bind(this);
    }

    render() {
        return (
            <div className="container">
                <NavBar width={this.state.width} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/ingredients" component={Ingredients} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </div>
        );
    }


    setSize() {
        this.setState({ width: window.innerWidth });
    }

    componentDidMount() {
        this.setSize();
        window.addEventListener('resize', this.setSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setSize);
    }
}