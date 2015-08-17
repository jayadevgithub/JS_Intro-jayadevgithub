// Given a date in string format, return the day it corresponds to.
exports.GetDay = function(dateString){
var milliSeconds = Date.parse(dateString);
return isNaN(milliSeconds)? milliSeconds:new Date(milliSeconds).getDay();
}

