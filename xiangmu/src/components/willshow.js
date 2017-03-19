
"use strict";

 import React from "react"
 
 import Scroller from "../../component_dev/scroller/src/"
 
class WillShows extends React.Component{
	constructor(props){
		super(props)
		this.state={
			willshow:[]
		}
	}
	
	setNodes(callback){
		fetch("/api/willshow1.php")
		.then(response=>
			response.json()
			)
		.then(res=>{
			console.log(res)
			let nodes=res.map((val,index)=>{
				return(
					<div className="movies-box">
	                    <i><img src={val.picture} /></i>
	                    <b>
	                       <span>{val.chname}</span>
	                       <span>{val.directorName}</span>
	                       <span>{val.gutdescipty}</span>
	                    </b>
	                 </div>
				)
			})
			callback(nodes)
		})
		.catch(e=>{
			console.log(e)
		})
	}
	
	
	render(){
		return(
			<div  className="m-willshow">
		         <div className="months">
		            <span>3</span>
	                <span>4</span>
	                <span>5</span>
	                <span>6</span>
	                <span>7</span>
		        </div>
			     <Scroller>
			        <div className="movies">
			            <div>
			                <h2>3月17日星期五</h2>
		                    {this.state.willshow}
			            </div>
			        </div>
			    </Scroller>
			</div>
		)
	}
	
	componentDidMount(){
		this.setNodes.call(this,(data)=>{
			console.log(data)
			this.setState({
				willshow:data
			})
		})
	}
	
}




export default  WillShows















