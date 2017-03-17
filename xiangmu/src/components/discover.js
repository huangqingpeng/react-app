"use strict";

import React from "react"
import Scroller from '../../component_dev/scroller/src/index'
import Carousel from '../../component_dev/carousel/src/index'

import {Link} from "react-router"

class Discover extends React.Component{
    
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         discoverData:[<div/>]
    //     }
    // }
    
    // setNodes(callback){
    //     fetch('/api/discover.php')
    //         .then(response=>response.json())
    //         .then(res=>{
    //             console.log(res)
    //             let data = res.recommendedscene.map((val,key) => {
    //                 return (
    //                     <li className="item">
    //                         <img src={val.logourl}/>
    //                     </li>
    //                 )
    //             })
    //             callback(data)
    //         })
    // }
    
	render(){
		return(
            <div className="m-discover">
                <header>发现</header>
                <Scroller>
                    <Carousel>
                        <li className="item"><img src="http://mobileimg.gewara.com/images/activity/201703/s_4df98ee0_1598baf99d5__260e.jpg" alt=""/></li>
                        <li className="item"><img src="http://mobileimg.gewara.com/images/activity/201703/MLb2rhjem5uh2LD2zqyLuXnaayg5.jpg" alt=""/></li>
                        <li className="item"><img src="http://mobileimg.gewara.com/images/activity/201703/s_1de32021_1598bafaafe__2590.jpg" alt=""/></li>
                        <li className="item"><img src="http://mobileimg.gewara.com/images/activity/201703/s_1de32021_1598bafaafe__2e60.jpg" alt=""/></li>
                        {/*{this.state.discoverData}*/}
                    </Carousel>
                </Scroller>
            </div>
		)
	}
    
    // componentDidMount(){
    //     this.setNodes.call(this,(data)=>{
    //         this.setState({
    //             discoverData: data
    //         })
    //     })
    // }
}


export default Discover
































