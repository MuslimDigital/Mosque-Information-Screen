/*
 *  Screen
 *
 *  Useful Links:
 *       - https://davidwalsh.name/fullscreen
 */

class Screen {

    constructor() {
        this._fullScreenBtn = $('#toggleFullScreen');
        this.initToggleScreenBtn();
        this.initFullscreenListener();
    }

    initToggleScreenBtn() {
        var _this = this;
        this._fullScreenBtn.on('click', function(event, target){
            _this.toggleFullscreen(document.documentElement);
        });
    }

    initFullscreenListener() {
        var _this = this;
        var fullScreenHandler = function () {
            if (document.webkitIsFullScreen == true || document.mozFullScreen == true || document.msFullscreenElement == true) {
                _this._fullScreenBtn.hide();
                return;
            }
            _this._fullScreenBtn.show();
        }
        
        document.addEventListener('webkitfullscreenchange', fullScreenHandler, false);
        document.addEventListener('mozfullscreenchange', fullScreenHandler, false);
        document.addEventListener('fullscreenchange', fullScreenHandler, false);
        document.addEventListener('MSFullscreenChange', fullScreenHandler, false);
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