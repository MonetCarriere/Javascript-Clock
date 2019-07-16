//var time = new Date ();
//console.log(time.getHours() % 12); //you do this to have normal time and not international time. this is called Mod 12
//console.log(time.getMinutes() );
//console.log(time.getSeconds() );


//You can use THIS code below to change the text in html to ANYTHING. It's that simple
//clock.textContent = 'hello'

//setInterval(displayclock, 500); //when you did this it went back to 00:00:00
var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');


function hexClock() {
    var time = new Date();

    var hours = (time.getHours() % 12).toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if(hours.length < 2) {
        hours = '0' + hours;
    }

    if(minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if(seconds.length < 2) {
        seconds = '0' + seconds;
    }

    var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
    var hexColorStr = '#' + hours + minutes + seconds;

    clock.textContent = clockStr;
    hexColor.textContent = hexColorStr;
}

hexClock();