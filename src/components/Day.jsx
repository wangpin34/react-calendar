import React, { Component, PropTypes } from 'react'

class Day extends Component {

	constructor(props){
		super(props)
	}

	render() {
    let { additionClasses, date, onDayChoose } = this.props
    let className = additionClasses + ' day'
		return (
				<span className={ className } onClick={ () => { onDayChoose(date) } }>{ date.getDate() }</span>
			)
	}
}

Day.propTypes = {
  additionClasses: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  onDayChoose: PropTypes.func.isRequired
}

Day.defaultProps = {
  additionClasses: ''
}


export default Day
