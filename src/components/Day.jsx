import React, { Component, PropTypes } from 'react'

export default class Day extends Component {

	constructor(props){
		super(props)
	}

	render() {
		return (
				<span className="day">{this.props.day}</span>	
			)
	}
}