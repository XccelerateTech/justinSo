

var myArray = [4, 8, 2, 7, 5];
var cb = function(a) {
    return a * 2;
};
// [ 8, 16, 4, 14, 10 ]
var newArray = (array, cb)=>{
    return array.map(e => cb(e));
}
console.log(newArray(myArray,cb))