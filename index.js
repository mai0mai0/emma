//set date to countdown to
var countDownDate  = new Date("Dec 18, 2023 19:48").getTime();

var x = setInterval(function(){
    //get current date
    var now = new Date().getTime(); 

    //difference between countDownDate and current date
    var c = countDownDate - now; 

    //calculations for days, hrs, mins, seconds
    var days = Math.floor(c / (1000 * 60 * 60 * 24));
    var hours = Math.floor((c % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    var minutes = Math.floor((c % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((c % (1000 * 60)) / 1000);


    //update html p timer with info
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    document.getElementById("cat").src = "./gifs/" + days + ".gif";

    //display message on countdown finish
    if (c < 0){
        clearInterval(x);
        document.getElementById("timer").innerHTML = "I can finally see you again!!! I missed you so much <3"
        document.getElementById("cat").src = "./gifs/finalday.gif";
    }

}, 1000);
//update every second
