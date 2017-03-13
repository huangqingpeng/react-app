"use strict";

import React from "react"

import {Link} from "react-router"

class Footer extends React.Component{
	
	
	
	render(){
		return(
			<footer>
			     <nav>
				     <ul>
				        <li>
					        <Link to="foods">
					             <i className="yo-ico">&#xe618;</i>
					             <b>楚汉美食</b>
						    </Link> 
					     </li>
					    <li>
					        <Link to="classify">
					             <i className="yo-ico">&#xe618;</i>
					             <b>菜品分类</b>
						    </Link> 
					     </li>
					     <li>
					        <Link to="ground">
					             <i className="yo-ico">&#xe618;</i>
					             <b>周边定位</b>
						    </Link> 
					     </li>
					     <li>
					        <Link to="mine">
					             <i className="yo-ico">&#xe618;</i>
					             <b>我的传奇</b>
						    </Link> 
					     </li>
				     </ul>
				</nav>
			</footer>
		)
	}
	
	
	
	
}


export default Footer
































