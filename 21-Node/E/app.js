var Timer = require("./timer");

var timer = new Timer();

timer.on("tick", function(remaining){
    if(remaining == 0){
        return console.log("BOOM");
    }
    console.log("Time remaining: " + remaining);
})

timer.stopWatch(2);