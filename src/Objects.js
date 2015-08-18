exports.GetObjectPropertyNames = function(obj) {
    if(obj == null){
        return null;
    }
    var propertyNameArray=new Array();
    for(var property in obj){
        if(obj.hasOwnProperty(property)){
            propertyNameArray.push(property);
        }
    }
    return propertyNameArray;
}

exports.GetObjectPropertyValues = function(obj) {
    if(obj == null){
        return null;
    }
    var propertyValueArray=new Array();
    for(var property in obj){
        if(obj.hasOwnProperty(property)){
            propertyValueArray.push(obj[property]);
        }
    }
    return propertyValueArray;
}
