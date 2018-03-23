import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link className="logo" to="/">Horror Bones</Link>
                    <nav id="nav">
                        <Link to="/">Home</Link>
                        <Link to="/categories">Stories</Link>
                    </nav>
                    <a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
                </div>
            </header>
        )
    }
}