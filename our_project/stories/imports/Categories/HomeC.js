import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import BannerBar from '../bannerBar';


export default class App extends Component{
    render(){
        return(
            <div>
                <BannerBar />
            </div>
        )
    }

}