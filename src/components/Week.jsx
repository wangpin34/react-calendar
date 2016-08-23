import React, { Component, PropTypes } from 'react'

export default class Week extends Component {

	constructor(props){
		super(props)
	}

	render() {
		return (
      <ul className="week">
        <li>Sun</li>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thr</li>
        <li>Fri</li>
        <li>Sa</li>
      </ul>
    )
	}
}
