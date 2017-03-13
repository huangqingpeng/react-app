"use strict";

import "../styles/app.scss"

import React from "react"

import ReactDOM from "react-dom"


import {Router,Route,hashHistory,IndexRoute,Redirect} from "react-router"

import Index from "./components/index"
import Foods from "./components/foods"
import Classify from "./components/classify"
import Mine from "./components/mine"
import Ground from "./components/ground"
ReactDOM.render((
	<Router history={hashHistory}>
	     <Route path="/" component={Index}>
	        <IndexRoute component={Index}></IndexRoute>
	        <Route path="foods" component={Foods}>
	             <IndexRoute component={Foods}></IndexRoute>
	        </Route>
	        <Route path="classify" component={Classify}></Route>
	        <Route path="ground" component={Ground}></Route>
	        <Route path="mine" component={Mine}></Route>
	        
	     </Route>
	
	</Router>

),document.getElementById("app"))
































