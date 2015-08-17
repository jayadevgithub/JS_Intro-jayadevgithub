exports.ReverseString = function(str){
    return str.split("").reverse().join("");
}

// Given a string with lname,fname - return an array with the first names.
// Example: SplitString("Gates,Bill;Jobs,Steve;Page,Larry") should return
// an array ["Bill","Steve","Larry"]

exports.GetFirstNames = function(str){
    var firstNames = null;
    if(str != null) {
        var splitStringBySemiColon = str.split(";");
        firstNames=new Array();
        for (var i in splitStringBySemiColon) {
            if (splitStringBySemiColon[i] != "") {
                firstNames.push(splitStringBySemiColon[i].split(",")[1]);
            }
        }
    }
    return firstNames;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
return arrayOfStrings.reverse();
}

// Given an array of sentences, create a paragraph by concatenating all the strings and adding
// fullstop (.) after each senetences.
exports.CreateParagraph = function(arrayOfStrings) {
    return (arrayOfStrings==null)?null:((arrayOfStrings.length != 0)?arrayOfStrings.join(".") + ".":[]);
}