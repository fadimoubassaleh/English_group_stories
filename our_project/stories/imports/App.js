import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import Banner from './Banner.js'
import Home1 from './Home1.js'
import Footer from './Footer.js'
import Slider from './Slider.js'

export default class App extends Component{
    render(){
        return(
            <div>
                <header id="header">
				<div className="inner">
					<a href="index.html" className="logo"><strong>Projection</strong> by TEMPLATED</a>
					<nav id="nav">
						<a href="index.html">Home</a>
						<a href="generic.html">Generic</a>
						<a href="elements.html">Elements</a>
					</nav>
					<a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
				</div>
			</header>

			<Banner/>

			<Home1/>
			
			<hr/>
			<Slider/>
			<hr/>

			<Footer/>

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
            </div>
        )
    }
}