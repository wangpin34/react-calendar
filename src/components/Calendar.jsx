import React, { Component, PropTypes } from 'react'
import style from '../style/index.scss'
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
				<Month onDayChoose={ this.props.onDayChoose }/>
			</div>
		)
	}
}

Calendar.propTypes = {
  onDayChoose: PropTypes.func
}

Calendar.defaultProps = {
  onDayChoose: () => null
}


export default Calendar
