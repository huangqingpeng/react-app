
"use strict";

 import React from "react"
 
 import Scroller from "../../component_dev/scroller/src/"
 
class WillShows extends React.Component{
	
	
	
	
	
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
			                 <div className="movies-box">
			                    <i><img src="http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p480747492.jpg"/></i>
			                    <b>
			                       <span>美女与野兽</span>
			                       <span>比尔康顿</span>
			                       <span>22055人想看</span>
			                    </b>
			                 </div>
			            </div>
			        </div>
			    </Scroller>
			</div>
		)
	}
}




export default  WillShows















