//
//"use strict";
//
//import React from "react"
//
//import {Link} from "react-router"
//
//
//
//class App extends React.Component{
//	render(){
//		return(
//			<div>
//			    <Link to="/">首页</Link>
//			    <Link to={{pathname:"/tv",query:{pageNo:2}}}>电视剧</Link>
//			    {this.props.children}
//			</div>
//		)
//	}
//}
//
//
//
//class TV extends React.Component{
//	render(){
//		return(
//			<div>
//			     {this.props.children}
//			</div>
//		)
//	}
//}
//
//
//
//
//class Show extends React.Component{
//	render(){
//		return(
//			<div>
//			     节目{this.props.params.id}
//			</div>
//		)
//	}
//}
//
//
//
//
//
//class Home extends React.Component{
//	render(){
//		return(
//			<div>
//			     首页内容 
//			</div>
//		)
//	}
//}
//
//
//
//
//
//
//class ShowIndex extends React.Component{
//	render(){
//		return(
//			<div>
//			     <Link to="/tv/shows/1">列表1</Link>
//			     <Link to="/tv/shows/2">列表2</Link> 
//			     <Link to="/tv/shows/3">列表3</Link>
//			</div>
//		)
//	}
//}
//
//
//
//
//export {App,TV,Show,Home,ShowIndex}
//
//
//
//
//
//
//
//


'use strict'

import React from 'react'
import { Link } from 'react-router'

class App extends React.Component{
	render(){
		return(
			<div>
			<Link to="/">首页</Link> 
			<Link to={{pathname:'/tv',query:{pageNum:666}}}>电视剧</Link>
			{this.props.children}
			</div>
		)
	}
}

class Tv extends React.Component{
	render(){
		return (
			<div>
				{this.props.children}
			</div>
			
		)
	}
}
class Home extends React.Component{
	render(){
		return (
			<div>这是首页的内容</div>
		)
	}
}
class TvList extends React.Component{
	render(){
		return(
			<div>
				<Link to='/tv/shows/1'>甄嬛传</Link><br/>
				<Link to='/tv/shows/2'>三生三世</Link><br/>
				<Link to='/tv/shows/3'>澳门风云</Link><br/>
				<Link to='/tv/shows/4'>随便</Link><br/>
				<Link to='/tv/shows/5'>沙飞</Link><br/>
			</div>
		)
	}
}
class Show extends React.Component{
	render(){
		return (
			<div>节目{this.props.params.id}</div>
		)
	}
}

export { App,Tv ,Show,Home,TvList }
















