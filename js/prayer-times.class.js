/*
 *  PrayerTimes
 *
 */

class PrayerTimes {

    constructor() {
        this.getPrayerTimes();
        this._prayerTimes = {};
    }

    getPrayerTimes() {
        var _this = this;
        $.get('/data/elm-prayer-times-2018.json').done(function(result){
            _this._prayerTimes = result;
            _this.setTodaysTimes();
        });
    }

    setTodaysTimes() {
        var times = this.getTodaysTimes();

        $('#fajr_begins').text(times['Fajr Begins']);
        $('#fajr_jamaah').text(times['Fajr Jama‘ah']);

        $('#zuhr_begins').text(times['Zuhr Begins']);
        $('#zuhr_jamaah').text(times['Zuhr Jama‘ah']);

        $('#asr1_begins').text(times['Asr Mithl 1']);
        $('#asr2_begins').text(times['Asr Mithl 2']);
        $('#asr_jamaah').text(times['Asr Jama‘ah']);

        $('#maghrib_begins').text(times['Maghrib Begins']);
        $('#maghrib_jamaah').text(times['Maghrib Jama‘ah']);

        $('#isha_begins').text(times['Isha Begins']);
        $('#isha_jamaah').text(times['Isha Jama‘ah']);
    }

    getTodaysTimes() {
        var date = moment().format('DD/MM/YYYY');
        return this._prayerTimes[date];
    }
}