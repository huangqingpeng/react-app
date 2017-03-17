
"use strict";

 import React from "react"
 
 import Scroller from "../../component_dev/scroller/src/"
 
class WillShows extends React.Component{
	
	render(){
		return(
			<div  className="m-willshow">
			    <Scroller>
			         <div className="months">
			            <span>3</span>
		                <span>4</span>
		                <span>5</span>
		                <span>6</span>
		                <span>7</span>
			        </div>
			        <div className="movies">
			            <div>
			                <p>3月17日星期五</p>
			                 <div>
			                 
			                 </div>
			            </div>
			        </div>
			    </Scroller>
			</div>
		)
	}
}




export default  WillShows















