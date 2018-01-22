import React,{Component,PropTypes} from 'react'
import Front from './front/front'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

export default class App extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
				<Router>
					<div>
						<Route component={Front} />
					</div>
				</Router>
			)
	}
}