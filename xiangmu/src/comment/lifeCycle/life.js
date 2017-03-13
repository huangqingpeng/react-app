

"use strict";
import React from "react"

export default class LifeCycle extends React.Component{
	constructor(props){
		super(props)
		console.log("Initial render")
		console.log("constructor")
		this.state={str:"hello"}
		
	}
	
	componentWillReceiveProps(nextProps){//组件收到新的props时调用，此时可以更改props 和 state
		console.log("componentWillReceiveProps"+nextProps)
		console.dir("nextProps")
	}
	
	shouldComponentUpdate(){//组件是否应该渲染新的state 和 props  返回值是 true（渲染） 和false（不渲染）
		console.log("shouldComponentUpdate(")
		return true
		//return false
		
	}
	
	
	ComponentWillUpdate(){//接收到新的props和state，进行渲染之前调用，此时不允许更改props和state
		console.log("ComponentWillUpdate")
	}
	
	ComponentDidUpdate(){//完成渲染新的props和state后调用，此时可以访问到新的dom元素
		console.log("ComponentDidUpdate")
	}
	
	
	
	ComponentWillMount(){//在完成首次渲染之前调用，此时仍然可以修改组件内的state
		console.log("ComponentWillMount")
	}
	
	
	
	
	ComponentDidMount(){ 
		//真实的dom被渲染出来后调用，在该方法中可以通过this.getDOMNode()访问到真实的dom元素。此时可以使用其他库操作dom
		console.log("ComponentDidMount")
	}
	
	
	setTheState(){
		let s="hello"
		if(this.state.str===s){
			s="HELLO"
		}
		
		this.setState({
			str:s
		})
	}
	
	
	ComponentWillunmount(){
		// 组件被移除之前调用，可以做一些清理工作。在componentMount方法中添加的所有任务都需要在该方法中一处
		console.log("ComponentWillunmount")
	}
	
	render(){
		console.log("render")
		return(
			<div>
			    <span>
			        {"props:"}
			        <h2>{this.props.num}</h2>
			    </span>
			    <span>
			        <h2>{this.state.str}</h2>
			    </span>
			</div>
			
		)
	}
	
	
	
}










