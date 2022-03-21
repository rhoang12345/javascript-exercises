const leapYears = function (year) {
//years divisible by 100 are not leap years unless they are divisible by 400 too
    if ((year % 100 === 0) && (year % 400 === 0)) {
        return true;
    }//if year is divisible by 100, not a leap year
    else if(year % 100 == 0){
        return false;
    }
    //is the year divisible by 4
    else if (year % 4 === 0) {
        return true;
    }else{
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
