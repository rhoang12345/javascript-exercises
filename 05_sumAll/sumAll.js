const sumAll = function (start, end) {
    if (typeof start !== "number" || typeof end !== "number") {
        return "ERROR";
    }
    //we want to return the sum of all the numbers from start all the way to end.
    //like if start = 1 and end = 4, we will do 1 + 2 + 3 + 4

    //variable to hold sum
    let sum = 0;
    //add to the sum variable continuously 
    //what happens when start is bigger than end?
    //when start is greater than end then we want to begin at the end and add until we reach the start
    //for example sumAll(126,1)

    if (start > end) {
        for (let i = end; i <= start; i++) {
            sum += i;
        }
    } else if (start < end) {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
    }

    if (sum < 0) {
        return "ERROR";
    } else {
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
