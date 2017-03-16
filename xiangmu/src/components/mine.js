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
			    			<i className="yo-ico">&#xe635;</i>
			    			<span></span>
			    			<i className="yo-ico">&#x3466;</i>
			    		</div>
			    		<img src="./img/mine_touxiang.png"/><br/>
			    		<a href="##">点击登录</a>
			    	</div>
			    	<div className="header_list">
			    		<ul>
			    			<li>
			    				<i className="yo-ico">&#xe69c;</i>
			    				<h2>关注</h2>
			    			</li>
			    			<li>
			    				<i className="yo-ico">&#xe615;</i>
			    				<h2>影迹</h2>
			    			</li>
			    			<li>
			    				<i className="yo-ico">&#xe602;</i>
			    				<h2>好友</h2>
			    			</li>
			    		</ul>
			    	</div>
			    </header>
			    <div className="main_list">
			    	<ul>
			    		<li>
			    			<p><i className="yo-ico">&#xe66f;</i><span>我的订单</span></p>
			    			<i> &gt; </i>
			    		</li>
			    		<li>
			    			<p><i className="yo-ico">&#xe67b;</i><span>我的钱包</span></p>
			    			<i> &gt; </i>
			    		</li>
			    		<li>
			    			<p><i className="yo-ico">&#xe630;</i><span>账户设置</span></p>
			    			<i> &gt; </i>
			    		</li>
			    		<li>
			    			<p><i className="yo-ico">&#xe601;</i><span>登录方式</span></p>
			    			<i><i className="yo-ico">&#xe688;</i>
			    			<i className="yo-ico">&#x3434;</i>
			    			<i className="yo-ico">&#xe616;</i> &gt; </i>
			    		</li>
			    	</ul>
			    	<ul>
			    		<li>
			    			<p><i className="yo-ico">&#xe610;</i><span>意见反馈</span></p>
			    			<i> &gt; </i>
			    		</li>
			    		<li>
			    			<p><i className="yo-ico">&#xe61b;</i><span>联系客服</span></p>
			    			<i> &gt; </i>
			    		</li>
			    	</ul>
			    	<ul>
			    		<li>
			    			<p><i className="yo-ico">&#xe643;</i><span>积分商城</span></p>
			    			<i> &gt; </i>
			    		</li>
			    	</ul>
			    </div>
			</div>
		)
	}
}
export default Mine
































