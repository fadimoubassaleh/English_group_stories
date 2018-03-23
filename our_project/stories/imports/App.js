import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./HomePage/Home.js"
import Categories from "./Categories/HomeC.js"

export default () => (
	<Router>
		<div>
			<Route exact path="/" render={() => { console.log('home'); return <Home /> }} />
			<Route path="/categories" render={() => { console.log('categories'); return <Categories /> }} />
		</div>
	</Router>

);