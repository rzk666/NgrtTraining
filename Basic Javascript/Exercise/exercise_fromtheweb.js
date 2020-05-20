//Create a function to multiply all of the values in an array by the amount of values in the given array.

const myFunc = (array) => {
    for(i = 0; i < array.length; i++) {
        array[i] = array[i] * array.length;
    }
    return array;
}

// Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).

const isItSafe = (string) => {
    
    for(i = 0; i < string.length; i++) {
        if (string[i] === " ") {
        return console.log("not safe");
    }   
    } 
        return console.log("SAFE");
        
    
}


        
            


 