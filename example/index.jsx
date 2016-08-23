import React from 'react'
import { render } from 'react-dom'
import Calendar from '../src/components/Calendar.jsx'

let onDayChoose = (date) => {
  console.log(date)
}

render(<Calendar onDayChoose={ onDayChoose }/>, document.getElementById('app'))
