"use strict";

import React from "react"
import Header from "./header"
import Section from "./section"
import Footer from "./footer"
import {Link} from "react-router"

var tabBars=[
    {
    	 title:"推荐",
    	 icon:"&#xe605;",
    	 type:"features",
    	 acativeIcon:"&#xe605;"
    },
    {
    	 title:"电影",
    	 icon:"&#xe60d;",
    	 type:"movie",
    	 acativeIcon:"&#xe60d;"
    },
    {
    	 title:"演出",
    	 icon:"&#xe7f1;",
    	 type:"show",
    	 acativeIcon:"&#xe7f1;"
    },
    {
    	 title:"发现",
    	 icon:"&#xe623;",
    	 type:"discover",
    	 acativeIcon:"&#xe623;"
    },
    {
    	 title:"我的",
    	 icon:"&#x3575;",
    	 type:"mine",
    	 acativeIcon:"&#x3575;"
    }
]

class Index extends React.Component{
	
	constructor(props){
		super(props)
	}
	
	
	initTabBars(){
		let type=TabBarStore.getItem()
		return tabBars.map((item,index)=>{
			return (
				
			)
		})
	}
	
	
	render(){
		return(
			<div className="m-index">
			    <section>{this.props.children}</section>
			    <footer>
			     <nav>
				     <ul>
				        <li>
					        <Link to="features">
					             <i className="yo-ico">&#xe618;</i>
					             <b>推荐</b>
						    </Link> 
					     </li>
					    <li>
					        <Link to="movie">
					             <i className="yo-ico">&#xe618;</i>
					             <b>电影</b>
						    </Link> 
					     </li>
					     <li>
					        <Link to="show">
					             <i className="yo-ico">&#xe618;</i>
					             <b>演出</b>
						    </Link> 
					     </li>
					      <li>
					        <Link to="discover">
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
































