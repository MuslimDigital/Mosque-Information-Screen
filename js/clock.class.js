class Clock {

    constructor() {
        moment.locale('en-gb');
        this.displayClock();
    }

    displayClock() {
        setInterval(function(){
            $('#clock').html(moment().format('h:mm A'));
        }, 1000);
    }

}