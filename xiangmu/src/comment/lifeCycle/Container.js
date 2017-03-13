"use strict";

import React from "react"
import ReactDOM from "react-dom"

import LifeCycle from "./life"



export default class Container extends React.Component{
	constructor(props){
		super(props)
		this.state={
			num:Math.random()*100
		}
	}
	
	//属性值改变
	propsChange(){
		this.setState({
			num:Math.random()*100
		})
	}
	//
	setLifeCycleState(){
		this.refs.rLifeCycle.setTheState()
	}
	//
	unmountLifeCycle(){
		ReactDOM.unmountComponentAtNode(document.getElementById("app"))
	}
	
	
	render(){
		return(
			<div>
			    <button onClick={this.propsChange.bind(this)}>propsChange</button>
			    <button onClick={this.setLifeCycleState.bind(this)}>setState</button>
			    <button onClick={this.unmountLifeCycle.bind(this)}>unmount</button>
			    <LifeCycle ref="rLifeCycle" num={this.state.num} ></LifeCycle>
			</div>
		)
	}
	
	
	
}












