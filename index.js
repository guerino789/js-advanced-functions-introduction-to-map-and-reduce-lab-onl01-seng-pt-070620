// Your code here

// sourceArray => [1,2,3]
function mapToNegativize(sourceArray){
    var array = [];
    for (var i = 0; i < sourceArray.length; i++) {
        // do something
        array.push(sourceArray[i] * -1);
    }
    // array => [-1,-2,-3]
    return array;
}

function mapToNoChange(sourceArray){
    var array = [];
    for (var i = 0; i < sourceArray.length; i++){
        array.push(sourceArray[i]);
    }
    
    return array;
}

function mapToDouble(sourceArray){
    var array = [];
    for (var i = 0; i < sourceArray.length; i++){
        array.push(sourceArray[i] * 2)
    }
    return array;
}

function mapToSquare(sourceArray){
    var array = [];
    for (var i = 0; i < sourceArray.length; i++){
        array.push(sourceArray[i]**2)
    }
    return array;
}


function reduceToTotal(sourceArray, startingPoint = 6){
    for (var i = 0; i < sourceArray.length; i++){
        
    }
}