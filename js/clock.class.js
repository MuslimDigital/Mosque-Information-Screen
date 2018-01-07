class Clock {

    constructor() {
        moment.locale('en-gb');
        this.displayClock();
        this.displayDate();
    }

    displayClock() {
        var _this = this;
        this.updateClock();
        setInterval(function(){
            _this.updateClock();
        }, 1000);
    }

    updateClock() {
        $('#clock').html(moment().format('h:mm A'));
    }

    displayDate() {
        $('#dayOfTheWeek').html(moment().format('dddd'));
        $('#date').html(moment().format('D MMMM YYYY'));
        $('#islamicDate').html(moment().format('iD iMMMM iYYYY'));
    }

}