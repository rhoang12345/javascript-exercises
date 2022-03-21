const reverseString = function(string) {
    //reversing string
    //i think we will have to start at the last index in the string and decrement until we reach the 0th index which is the first character in the string
    //concat function to append the strings to an empty string we made called reversedString
    //so we are appending a single character starting from the end of the string to the beginning character.
    let reversedString = "";
    for(let i = string.length - 1; i >= 0; i--){
        reversedString = reversedString.concat(string.charAt(i));
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
