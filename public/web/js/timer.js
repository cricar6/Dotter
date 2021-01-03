let ms = 0;
let seconds = 0;
let minutes = 0;

let paused = false;

let timer = $.timer(function() {
    if (ms < 10) {
        ms++;
        if (ms < 10) {
            $('#timerMSeconds').html('0' + ms);
        } else {
            $('#timerMSeconds').html(ms);
        }
    }
    if (ms >= 10) {
        seconds++;
        if (seconds < 10) {
            $('#timerSeconds').html('0' + seconds);
        } else {
            $('#timerSeconds').html(seconds);
        }
        ms = 0;
    }
    if (seconds >= 60) {
        minutes++;
        if (minutes < 10) {
            $('#timerSeconds').html('0' + minutes);
        } else {
            $('#timerSeconds').html(minutes);
        }
        seconds = 0;
    }
});
