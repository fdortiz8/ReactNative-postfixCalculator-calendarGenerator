export default class {
  /**
   * @param {Date} date
   * @return {[[Number]]} 6x7 array of integers
   */
    static generate(date) {
        let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        let dayOfWeek = (firstDayOfMonth + 6) % 7;
        let currentDays = [];
        
        let daysInPreviousMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        
        let daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        
        for (let row = 0; row < 6; row++) {
            currentDays[row] = Array(7).fill(-1);
            for (let col = 0; col < 7; col++) {
                let dayNumber = row * 7 + col - dayOfWeek;
                
                if (dayNumber <= 0) {
                    dayNumber = daysInPreviousMonth + dayNumber;
                } else if (dayNumber > daysInMonth) {
                    dayNumber = dayNumber - daysInMonth;
                }
                
                currentDays[row][col] = dayNumber;
            }
        }
        console.log(currentDays);
        return currentDays;
    }
}

