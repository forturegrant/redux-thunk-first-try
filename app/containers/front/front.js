import React,{Component,PropTypes} from 'react'
import FrontHeader from './components/frontHeader/frontHeader'

export default class Front extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
				<div>
					<FrontHeader />
				</div>
			)
	}
}