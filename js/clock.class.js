class Clock {

    constructor() {
        moment.locale('en-gb');
        this.displayClock();
    }

    displayClock() {
        setInterval(function(){
            $('#clock').html(moment().format('H:mm:ss'));
        }, 1000);
    }

}