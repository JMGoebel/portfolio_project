var name = screen.height;

var elOne = document.getElementById("slide_one");
var elTwo = document.getElementById("slide_two");
var elThree = document.getElementById("slide_three");
var elFour = document.getElementById("slide_four");

$('#slide_one').css({'background-color': 'black',
                     'min-height': window.innerHeight + 'px'});

$('#slide_two').css({'background-color': 'green',
                     'min-height': window.innerHeight + 'px'});

$('#slide_three').css({'background-color': 'red',
                     'min-height': window.innerHeight + 'px'});

$('#slide_four').css({'background-color': 'grey',
                     'min-height': window.innerHeight + 'px'});
