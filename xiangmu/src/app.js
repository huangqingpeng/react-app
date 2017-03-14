"use strict";

import "../styles/app.scss"

import React from "react"

import ReactDOM from "react-dom"


import {Router,Route,hashHistory,IndexRoute,Redirect} from "react-router"

import Index from "./components/index"
import Features from "./components/features"
import Movie from "./components/movie"
import Mine from "./components/mine"
import Show from "./components/show"
import Discover from "./components/discover"


ReactDOM.render((
	<Router history={hashHistory}>
	     <Route path="/" component={Index}>
	        <IndexRoute  component={Features}></IndexRoute>
	        <Route path="features" component={Features}></Route>
	        <Route path="movie" component={Movie}></Route>
	        <Route path="show" component={Show}></Route>
	        <Route path="mine" component={Mine}></Route>
	        <Route path="discover" component={Discover}></Route>
	     </Route>
	
	</Router>

),document.getElementById("app"))
































