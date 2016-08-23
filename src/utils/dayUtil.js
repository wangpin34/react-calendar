const daysOfMonthes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const oneDayMilliseconds = 24 * 60 * 60 * 1000
const monthNames = [
                    { name: 'January', abbr: 'Jan'},
                    { name: 'February', abbr: 'Jan'},
                    { name: 'March', abbr: 'Mar'},
                    { name: 'April', abbr: 'Apr'},
                    { name: 'May', abbr: 'May'},
                    { name: 'June', abbr: 'Jun'},
                    { name: 'July', abbr: 'Jul'},
                    { name: 'August', abbr: 'Aug'},
                    { name: 'September', abbr: 'Sep'},
                    { name: 'October', abbr: 'Oct'},
                    { name: 'November', abbr: 'Nov'},
                    { name: 'December', abbr: 'Dec'},
                  ]
/******************* Important **********************/
//All passed month number start from 1 to 12

const main = {

  getDaysByMonth: month => {
    let date = new Date()

    if(month === 2){
      let year = date.getFullYear()
      if((year % 400 === 0) || (year % 4 === 0)){
  			return 29
  		}else{
  			return 28
  		}
    }

    return daysOfMonthes[--month]
  },

  getDaysByDate: (date = new Date()) => {
    let month = date.getMonth() + 1
    return main.getDaysByMonth(month)
  },

  getFirstDayOfMonth: (year, month) => {
    return new Date(year + '-' + month + '-01')
  },

  getLastDayOfMonth: (year, month) => {
    let lastDay = main.getDaysByMonth(month)
    return new Date(year + '-' + month + '-' + lastDay)
  },

  getPreDate: (date, preNum) => {
    let time = date.getTime() - preNum * oneDayMilliseconds
    return new Date(time)
  },

  getAfterDate: (date, afterNum) => {
    let time = date.getTime() + afterNum * oneDayMilliseconds
    return new Date(time)
  },

  getNextDay: (date) => {
    return main.getAfterDate(date, 1)
  },

  getMonthName: month => {
    if(month > 12){
      throw new Error('Month number should less than 12')
    }
    return monthNames[month - 1].abbr
  }
}


export default main
