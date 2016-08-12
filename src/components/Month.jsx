import React, { Component, PropTypes } from 'react'
import days from '../utils/days'
import Week from './Week.jsx'
import Title from './Title.jsx'
import Day from './Day.jsx'

class Month extends Component {
	constructor(props) {
		super(props)
    this.state = {}
	}

  componentWillMount() {
    let date = this.props.date
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let dayInWeek = date.getDay()
    let dayInMonth = date.getDate()
    let firstDayInWeek = days.getFirstDayOfMonth(year, month).getDay()
    let lastDayInWeek = days.getLastDayOfMonth(year, month).getDay()
    let previousDaysNum = firstDayInWeek > 6 ? 0 : firstDayInWeek
    let afterDaysNum = lastDayInWeek > 6 ? 6 : 6 - lastDayInWeek
    //Compute how many days should should onto month view
    let days = []

  }

	render() {
		return (
			<div className="month">
				<Title date={this.props.date}/>
			</div>
		)
	}
}

Month.propTypes = {
	date: PropTypes.object
}

Month.defaultProps = {
	date: new Date()
}

export default Month
