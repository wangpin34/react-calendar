import React, { Component, PropTypes } from 'react'

class Day extends Component {

	constructor(props){
		super(props)
	}

	render() {
    let { additionClasses, date } = this.props
    let className = additionClasses + ' day'
		return (
				<span className={ className }>{ date.getDate() }</span>
			)
	}
}

Day.propTypes = {
  additionClasses: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired
}

Day.defaultProps = {
  additionClasses: ''
}


export default Day
