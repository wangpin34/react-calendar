import React, { Component } from 'react'
import Month from './Month.jsx'

class Calendar extends Component {
	constructor(props) {
		super(props)

	}

	componentWillMount() {

	}

	render() {
		return (
			<div className="calendar">
				<Month />
			</div>
		)
	}
}


export default Calendar
