

$('.gb_ub .gb_c').text($('.gb_ub .gb_c').text().replace('+','%^#@'));
$('.newsimg img').attr('src','https://img.new.livestream.com/accounts/00000000002eb73c/91fc5496-8cfa-4e10-b0c9-182485465b12_170x170.jpg');


$('#sbfrm_l').append('<div id="timer" class="iranica-time"></div>');
$('#sbfrm_l').append('<div id="clock" class="iranica-time"></div>');

var start = new Date;

setInterval(function() {
    $('#timer').text("Current Session: "+Math.round((new Date - start) / 1000) + " Seconds");
    $('#clock').text("Time: "+ (new Date()).toTimeString());
}, 1000);


//document.getElementsByClassName('gb_d')[0].background = 'none';
//main.style.background-color = '#000';

