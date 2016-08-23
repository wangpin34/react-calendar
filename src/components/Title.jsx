import React, { Component, PropTypes } from 'react'
import dayUtil from '../utils/dayUtil'

export default class Title extends Component {

	constructor(props){
		super(props)
	}

	render() {
		let date = this.props.date
		let year = date.getFullYear()
	 	let month = dayUtil.getMonthName(date.getMonth() + 1)
		return (
				<h1 className="title">{month} , {year}</h1>
			)
	}
}
