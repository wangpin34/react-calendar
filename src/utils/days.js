const daysOfMonthes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

//All passed month number start from 1 to 12

export default const funcs = {

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
    return this.getDaysByMonth(++date.getMonth())
  },

  getFirstDayOfMonth: (year, month) => {
    return new Date(year + '-' + month + '-01')
  },

  getLastDayOfMonth: (year, month) => {
    let lastDay = this.getDaysByMonth(month)
    return new Date(year + '-' + month + '-' + lastDay)
  }
}
