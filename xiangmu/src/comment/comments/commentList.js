"use strict";

import React from "react"

import Comment from "./comment"

class CommentList extends React.Component{
	render(){
		//循环遍历数组    可以循环嵌套  key为当前元素的索引  必须加上
		let commentNodes=this.props.data.map((comment,index)=>{
			return(
				<Comment key={index} name={comment.name} content={comment.content} date={comment.date}  />
			)
		})
		
		return(
			<div>
				{commentNodes}

			</div>
		)
		
	}
}




export default CommentList
