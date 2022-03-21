const removeFromArray = function (array, ...theArgs) {

    // for(let i = 0; i < array.length; i++){
    //     if(i === numberToRemove){

    //     }
    // }

    //1st parameter defines starting position/where new elements should be added/spliced in
    //2nd parameter is how many elements we want to remove


    //I did removeFromArray.length to count how many parameters the function is declared to accept
    //so it can have the array and a variable number of arguments
    //use for-loop to iterate through each argument since theArgs represents an indefinite amount of arguments as an array
    //[1,2,3,4]
    //so if we do removeFromArray([1,2,3,4], 3, 2); for example
    //...theArgs will have a length of 2
    //we gonna start at theArgs[0] which is 3
    //splice actually modifies/permanently changes the passed in array so whatever we remove, it will change the amount of elements the array has
    //we will return the modified array
    //the array method indexOf will look at the index where the passed in value is located
    //so it will find 3 at index 2.
    //because of how splice() works, we start at index 2 and remove 1 element starting at index 2.
    //So we remove 3 and now we are left with [1,2,4]
    //we increment i and now i = 1, so then we move on to the next argument which is 2
    //array.indexOf(2) will return 1 which is index 1 in [1,2,4] 
    //now we remove 1 element starting at index 1 due to the splice function's second parameter
    //2 is removed from the array so we have [1,4] left.

    for (let i = 0; i < theArgs.length; i++) {
        //we do includes() to check if the argument does exist in the array to check and that we can find the index of it
        if (array.includes(theArgs[i])) {
            array.splice(array.indexOf(theArgs[i]), 1);
        }
    }

return array;
};

// Do not edit below this line
module.exports = removeFromArray;
