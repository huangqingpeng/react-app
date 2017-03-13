"use strict";

import React from "react"

class Comment extends React.Component{
	render (){
		
		return(
			<div>
			    <span>{this.props.name}</span> &nbsp;
			    <span>{this.props.content}</span>&nbsp;
			    <span>{this.props.date }</span> &nbsp;
			</div>
		)
	}
	
	
	
}



export default Comment 






