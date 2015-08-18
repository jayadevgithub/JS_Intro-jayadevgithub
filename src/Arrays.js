exports.SumOfArray = function(arrayOfNums){
    var sum=0;
    for(var i in arrayOfNums){
        sum+=arrayOfNums[i];
    }
    return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
    var sumOfUniqueNums=0;
    arrayOfNums.sort();
    for(var i=0;i<arrayOfNums.length;i++){
        sumOfUniqueNums+=arrayOfNums[i];
        for(var j=i+1;j<arrayOfNums.length;j++){
            if(arrayOfNums[i]==arrayOfNums[j]){
            arrayOfNums.splice(j--,1);
            }
        }
    }
    return sumOfUniqueNums;
}

//2-D array exercises
// Given a 2-d array, verify it is of equal dimensions and return
// the sum of diagonal elements.

exports.SumOfDiagonalCells = function(array2d){
var isArrayAndIsEquiDimensional=exports.IsArrayAndIsEquiDimensional(array2d);
    if(isArrayAndIsEquiDimensional){
        var sumOfDiagonals=0;
        for(var subArray in array2d){
            sumOfDiagonals+=array2d[subArray][subArray];
        }
        return sumOfDiagonals;
    }
}

exports.IsArrayAndIsEquiDimensional=function(array2D){
    if(!array2D instanceof Array){
        return false;
    }
    var array2DSize=array2D.length;
    for(var subArray in array2D){
        if(array2D[subArray].length != array2DSize){
            return false;
        }
    }
    return true;
}