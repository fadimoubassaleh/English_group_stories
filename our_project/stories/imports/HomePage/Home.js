import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import Home1 from './Home1.js'
import Footer from './Footer.js'
import Slider from './Slider.js'
import BannerBar from '../bannerBar';

export default class App extends Component{
    render(){
        return(
            <div>

			<BannerBar/>

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