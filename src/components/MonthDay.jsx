import React, { Component, PropTypes } from 'react'
import Day from './Day.jsx'

class MonthDay extends Component {

	constructor(props){
		super(props)
	}

	render() {
    let { month, date } = this.props
    let isInMonth = false
    if(month === (date.getMonth() + 1)) {
      isInMonth = true
    }
		return <Day additionClasses={ isInMonth ? 'in-month' : '' } date={ date } />
	}
}

MonthDay.propTypes = {
  month: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired
}


export default MonthDay
