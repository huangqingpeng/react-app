"use strict";

import React from "react"


class CommentForm extends React.Component{
	handleClick(){
		let name=this.refs.name.value  // 获取当前的数据
		let content=this.refs.content.value  // 获取当前的数据交给此函数处理
		//通过属性方法 获取传过来的函数handelCommentSubmit，把当前获取的数据
		this.props.onhandelCommentSubmit({name:name,content:content}) 
		this.refs.name.value=""
		this.refs.content.value=""
		
	}
	
	
	
	render(){
		return(
			<div>
			    <label>
			        <input type="text" placeholder="用户名" ref="name" />
			    </label>
			    <label>
			        <textarea placeholder="留言内容" ref="content"></textarea>
			    </label>
			    <label>
			       <button onClick={this.handleClick.bind(this)}>发表言论</button>
			    </label>
			</div>
		)
		
	}
}




export default CommentForm



