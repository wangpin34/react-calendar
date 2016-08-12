import React, { Component, PropTypes } from 'react'

export default class Week extends Component {

	constructor(props){
		super(props)
	}

	render() {
		let { from, to } = this.props
		return (
				<p className="week">{from} - {to}</p>	
			)
	}
}