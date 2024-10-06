var weekDays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var now=new Date()
var TodayDate=now.getDay()

var result=weekDays[TodayDate]
console.log('Sample Output: '+result);
var currentDateHour=now.getHours()+'AM : '+now.getMinutes()+' : '+now.getSeconds()
console.log('Current Time is: '+currentDateHour);
