var letter = require("./letter")
var string = '';
function text(num) {
    for (i = 0; i < num; i++) {
        string = string + letter()
}}

text(6);
console.log(string);