"use strict";

import React from "react"

import CommentList from "./commentList"
import CommentForm from "./commentForm"


class CommentBox extends React.Component{
	constructor(props){//刚开始加载页面的时候就会执行
		super(props)
		this.state={
			data:[]
		}
		this.getData()
	}
	//相当于ajax去取数据 , 首次渲染页面
	getData(){
		fetch(this.props.url).then(response=>response.json())
		.then(res=>{
		   	this.setState({data:res})
		})
		.catch(e=>console.log("opps,error",e))
		
	}
	
	handelCommentSubmit(comment){
		console.log(comment)  //参数comment是获取当前要改变的数据
		let comments=this.state.data //获取老数据
		let newcomments=comments.concat(comment) //把当前获取的数据添加到老数据中
		this.setState({data:newcomments}) //更新老数据
	}
	
	
	
	render(){
		return(
			<div>
			    <CommentList data={this.state.data} />
			    <div>
			         <CommentForm  onhandelCommentSubmit={this.handelCommentSubmit.bind(this)} />
			    </div>
			    
			
			</div>
			
		)
		
	}
}

export default CommentBox











