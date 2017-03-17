"use strict";

import React from "react"
import Scroller from '../../component_dev/scroller/src/index'
import Carousel from '../../component_dev/carousel/src/index'

import {Link} from "react-router"

class Discover extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            discoverData:[]
        }
    }
    
    setNodes(callback){
        fetch('/api/m-discover')
            .then(response=>response.json())
            .then(res=>{
                let data = res.recommendedscene.map((val,key) => {
                    return (
                        <li className="item">
                            <img src={val.logourl}/>
                        </li>
                    )
                })
                callback(data)
            })
    }
    
	render(){
		return(
            <div className="m-discover">
                <header>发现</header>
                <Scroller>
                    <Carousel>
                        {/*<li className="item">1</li>*/}
                        {/*<li className="item">2</li>*/}
                        {/*<li className="item">3</li>*/}
                        {this.state.discoverData}
                    </Carousel>
                </Scroller>
            </div>
		)
	}
    
    componentDidMount(){
        this.setNodes.call(this,(data)=>{
            this.setState({
                discoverData: data
            })
        })
    }
}


export default Discover
































