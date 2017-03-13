//
//"use strict";
//
//import "../styles/app.scss"
//
//import React from "react"
//
//import ReactDOM from "react-dom"
//
//
//import {Router,Route,hashHistory,IndexRoute,Redirect} from "react-router"
//
//import {App,TV,Show,Home,ShowIndex} from "./comment/router/route"
//
//
//ReactDOM.render((
//	<Router history={hashHistory}>
//	     <Route path="/" component={App}>
//	        <IndexRoute component={Home}></IndexRoute>
//	        <Route path="tv" component={TV}>
//	            <IndexRoute component={ShowIndex}></IndexRoute>
//	            <Route path="/shows/:id" component={Show}></Route>
//	            <Redirect from="shows/:id" to="/shows/:id"></Redirect>
//	        </Route>
//	     </Route>
//	
//	</Router>
//
//),document.getElementById("app"))









'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory,IndexRoute,Redirect} from 'react-router'
import {App,Tv,Show,Home,TvList} from './comment/router/route'

ReactDOM.render((

	<Router history={hashHistory}>
	{/*	1341*/}
		<Route path="/" component={App}>
		<IndexRoute component={Home}></IndexRoute>
			<Route path="tv" component={Tv}>
				<IndexRoute component={TvList}></IndexRoute>
				<Route path='/shows/:id' component={Show}>
				</Route>
				<Redirect from='shows/:id' to='/shows/:id' ></Redirect>
			</Route>
		</Route>
	</Router>
	),document.getElementById("app")
)





















