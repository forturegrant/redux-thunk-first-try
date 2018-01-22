import React,{Component,PropTypes} from 'react'

export default class FrontHeader extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
				<div>
					<span>北京</span>
					<img src="./arrow_down.png" />
					<input type="text" placeholder="请输入关键字" />
					<img src="./usered.png" />
				</div>
			)
	}
}