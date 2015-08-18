exports.ParseNumber = function(str){
    return parseInt(str);
}

exports.ConvertNumberToString = function(num){
    return !isNaN(num)?num.toString():"";
}

exports.ParseDate = function(str){
    return str==null?NaN:new Date(str);
}

exports.ConvertDateToString = function(dateValue){
    return dateValue.toString();
}

//Parse a string containing a comma seperated sequence of numbers
// and return an array containing the numbers. Return NaN for invalid
// numbers in the string.
exports.ParseStringOfNumbers = function(str){
    var arrayOfNums = (!str=="" && typeof str === 'string')?str.split(","):[];
    for(var strNum in arrayOfNums){
        if(arrayOfNums[strNum]!=""){
            arrayOfNums[strNum]=exports.ParseNumber(arrayOfNums[strNum]);
        }
    }
    return arrayOfNums;
}

exports.ConvertArrayOfNumbersToString = function(obj){
    return (obj==[]||typeof obj === 'string')?"":obj.toString();
}


exports.ConvertStringToObject = function(str){
    var pattern = /({"|":")/;
    return (isNaN(str)&& pattern.test(str))?JSON.parse(str):null;
}

exports.ConvertObjectToString = function(obj){
    return isNaN(obj)?JSON.stringify(obj):null;
}

var res=exports.ConvertStringToObject("{firstname:\"Bill\",lastname:\"Gates\"}")
console.log(res)