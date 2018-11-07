var random = require("./random");

var letter= ()=>{
    return(String.fromCharCode(random()));
}


module.exports = letter;
