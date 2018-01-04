class Clock {

    constructor() {
        moment.locale('en-gb');
        this.displayClock();
        this.displayDate();
    }

    displayClock() {
        setInterval(function(){
            $('#clock').html(moment().format('h:mm A'));
        }, 1000);
    }

    displayDate() {
        $('#dayOfTheWeek').html(moment().format('dddd'));
        $('#date').html(moment().format('D MMMM YYYY'));
        $('#islamicDate').html(moment().format('iD iMMMM iYYYY'));
    }

}