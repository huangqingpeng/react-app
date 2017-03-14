"use strict";

import React from "react"
import Header from "./header"
import Section from "./section"
import Footer from "./footer"
import {Link} from "react-router"

class Index extends React.Component{
	
	constructor(props){
		super(props)
		this.state={
			currentType:"foods"
		}
	}
	
	
	
	render(){
		return(
			<div className="m-index">
			    <section>{this.props.children}</section>
			    <footer>
			     <nav>
				     <ul>
				        <li>
					        <Link to="foods">
					             <i className="yo-ico">&#xe618;</i>
					             <b>推荐</b>
						    </Link> 
					     </li>
					    <li>
					        <Link to="classify">
					             <i className="yo-ico">&#xe618;</i>
					             <b>电影</b>
						    </Link> 
					     </li>
					     <li>
					        <Link to="ground">
					             <i className="yo-ico">&#xe618;</i>
					             <b>演出</b>
						    </Link> 
					     </li>
					      <li>
					        <Link to="others">
					             <i className="yo-ico">&#xe618;</i>
					             <b>发现</b>
						    </Link> 
					     </li>
					     <li>
					        <Link to="mine">
					             <i className="yo-ico">&#xe618;</i>
					             <b>我的</b>
						    </Link> 
					     </li>
					    
				     </ul>
				</nav>
			</footer>
			</div>
		)
	}
	
	
	
	
}


export default Index
































