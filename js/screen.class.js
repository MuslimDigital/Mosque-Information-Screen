/*
 *  Screen
 *
 *  Useful Links:
 *       - https://davidwalsh.name/fullscreen
 */

class Screen {

    constructor() {
        this.initToggleScreenBtn();
    }

    initToggleScreenBtn() {
        var _this = this;
        $('#toggleFullScreen').on('click', function(event, target){
            _this.toggleFullscreen(document.documentElement);
            target.hide();
        });
    }

    toggleFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}