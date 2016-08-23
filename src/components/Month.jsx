import React, { Component, PropTypes } from 'react'
import dayUtil from '../utils/dayUtil'
import Week from './Week.jsx'
import Title from './Title.jsx'
import MonthDay from './MonthDay.jsx'

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
    let firstDay = dayUtil.getFirstDayOfMonth(year, month)
    let lastDay = dayUtil.getLastDayOfMonth(year, month)
    let firstDayInWeek = firstDay.getDay()
    let lastDayInWeek = lastDay.getDay()
    //Compoute days before and after this month in calendar
    let previousDaysNum = firstDayInWeek > 6 ? 0 : firstDayInWeek
    let afterDaysNum = lastDayInWeek > 6 ? 6 : 6 - lastDayInWeek
    //
    let totalDays = dayUtil.getDaysByMonth(month) + previousDaysNum + afterDaysNum
    let firstDayInCalendar = dayUtil.getPreDate(firstDay, previousDaysNum)
    //Compute days in month view
    let current = firstDayInCalendar
    let days = [current]
    while(--totalDays > 0) {
      let last = days[days.length - 1]
      days.push(dayUtil.getNextDay(last))
    }
    this.setState({days})
  }

	render() {
    let { date, onDayChoose } = this.props
    let month = date.getMonth() + 1

		return (
			<div className="month">
				<Title date={this.props.date}/>
        <Week />
        { this.state.days.map(day => {
          return <MonthDay key={ Math.random() } month={ month } date={ day } onDayChoose={ onDayChoose }/>
        })}
			</div>
		)
	}
}

Month.propTypes = {
	date: PropTypes.object,
  onDayChoose: PropTypes.func.isRequired
}

Month.defaultProps = {
	date: new Date()
}

export default Month
