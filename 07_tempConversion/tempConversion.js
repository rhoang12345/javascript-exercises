const ftoc = function(number) {
  let fconvertToC = (number - 32) * 5/9
  //use Number() to convert the string that was returned by toFixed into an number
  return Number(fconvertToC.toFixed(1));
};

const ctof = function(number) {
  return Number((number * 9/5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
