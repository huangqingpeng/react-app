"use strict";

import React from "react"

import {Link} from "react-router"

class Mine extends React.Component{
	render(){
		return(
			<div className="mine_box">
			    <header>
			    	<div className="head">
			    		<div className="icon">
			    			<span></span>
			    		</div>
			    		<img src="./img/mine_touxiang.png"/><br/>
			    		<a href="##">点击登录</a>
			    	</div>
			    	<div clssName="header_list">
			    		<ul>
			    			<li>
			    				<p>&#xe60a;</p>
			    				<h2>关注</h2>
			    			</li>
			    			<li>
			    				<p>&#xe638;</p>
			    				<h2>足迹</h2>
			    			</li>
			    			<li>
			    				<p>&#xe68d;</p>
			    				<h2>好友</h2>
			    			</li>
			    		</ul>
			    	</div>
			    </header>
			    <section>
			    	<ul>
			    		<li>
			    			
			    		</li>
			    	</ul>
			    </section>
			</div>
		)
	}
}
export default Mine
































