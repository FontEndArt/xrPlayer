import { addClass, removeClass } from "./index";
import { handleKeyboard } from "./keyboard";
import { setVolume } from "./volume";
import { changePlayer, videoPlay } from "./control";
import { setProgressLine } from "./progress";
import { onFullScreen, cancelFullScreen } from "./full";

// 播放/暂停
export const playEvent = function () {
    const controlPlayDom = this.domEl.controlPlayDom;
    const shadowDom = this.domEl.shadowDom;
    const _self = this;

    controlPlayDom.addEventListener("click", (event) => {
        // 处理键盘事件冲突
        if (_self.isKeypress) { _self.isKeypress = false; return; }
        changePlayer.call(_self, event);
    }, true);
    shadowDom.addEventListener("click", (event) => {
        changePlayer.call(_self, event);
    }, true);
}

// 监听全屏变化
export const fullScreen = function () {
    const _self = this;
    const video = this.videoEl;
    const playerDom = this.domEl.playerDom;
    const fullDom = this.domEl.fullDom;

    playerDom.addEventListener('fullscreenchange', function () {
        if (document.fullscreenElement) {
            _self.fullscreen = true;
            removeClass.call(fullDom, "xr_icon_expand-arrows");
            addClass.call(fullDom, "xr_icon_compress-arrows-alt");
        } else {
            _self.fullscreen = false;
            removeClass.call(fullDom, "xr_icon_compress-arrows-alt");
            addClass.call(fullDom, "xr_icon_expand-arrows");
        }

        // 修复全屏和取消全屏时候的画面变化
        if (video.paused) {
            loadCanvas();
            setTimeout(function () {
                clearInterval(Timer);
                Timer = null;
            }, 0)
        }
    }, false);

    // 全屏
    fullDom.addEventListener("click", function (event) {
        // 处理键盘事件冲突
        if (_self.isKeypress) { _self.isKeypress = false; return; }
        if (_self.fullscreen) {
            cancelFullScreen();
        } else {
            onFullScreen(playerDom);
        }
    })
}

export const progressEvent = function () {
    const _self = this;
    const video = this.videoEl;
    const progress = this.domEl.progressBarContainerDom;

    // 进度条事件
    // TODO: 移除JQ相关
    progress.addEventListener("mousedown", function (event) {
        console.log(this.offset);
        var progressLeft = $(this).offset().left;
        var progressWidth = $(this).width();

        $(document).on("mousemove", function (event) {
            var left = (event.pageX - progressLeft) / progressWidth;
            if (left < 0) { left = 0 }
            if (left > 1) { left = 1 }
            video.currentTime = left * video.duration
            setProgressLine.call(_self);
            $("html").css("cursor", "pointer");
        }).on("mouseup", function (event) {
            var left = (event.pageX - progressLeft) / progressWidth;
            if (left < 0) { left = 0 }
            if (left > 1) { left = 1 }
            video.currentTime = left * video.duration
            setProgressLine.call(_self);
            $("html").css("cursor", "auto");
            $(document).off("mousemove").off("mouseup");
            clearInterval(_self.Timer);
            videoPlay.call(_self);
        })
    })
}

// TODO: 移除JQ相关
export const voiceEvent = function () {
    const _self = this;
    const video = this.videoEl;
    const voiceMuteDom = this.domEl.voiceMarkDom;
    const voiceDom = this.domEl.voiceDom;

    // 音量静音/恢复
    voiceMuteDom.addEventListener("click", function () {
        if (video.volume > 0) {
            _self.oldVolume = video.volume;
            setVolume.call(_self, 0);
        } else {
            setVolume.call(_self, _self.oldVolume || 0.5);
        }
    })
    // 音量
    voiceDom.addEventListener("mousedown", function (event) {
        var voiceLeft = $(this).offset().left;
        var voiceWidth = $(this).width();

        $(document).on("mousemove", function (event) {
            var left = (event.pageX - voiceLeft) / voiceWidth;
            if (left < 0) { left = 0 }
            if (left > 1) { left = 1 }
            setVolume.call(_self, left);
            $("html").css("cursor", "pointer");
        }).on("mouseup", function (event) {
            var left = (event.pageX - voiceLeft) / voiceWidth;
            if (left < 0) { left = 0 }
            if (left > 1) { left = 1 }
            setVolume.call(_self, left);
            $("html").css("cursor", "auto");
            $(document).off("mousemove").off("mouseup");
        })
    })
}

// TODO: 移除JQ相关
export const keyboardEvent = function () {
    const _self = this;
    const playerDom = this.domEl.playerDom;

    // 是否是播放页
    if (!_self.options.playerPage) {
        // 是否播放的状态切换
        $(document).on("click", function () {
            _self.isPlayer = false;
        });
        playerDom.addEventListener("click", function () {
            event.stopPropagation();
            _self.isPlayer = true;
        });

        $(document).keypress(function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (_self.isPlayer) {
                handleKeyboard.call(_self, event)
            }
        });
    } else {
        $(document).keypress(function (event) {
            handleKeyboard.call(_self, event);
        });
    }
}

export const initEvent = function () {
    playEvent.call(this);
    fullScreen.call(this);
    progressEvent.call(this);
    voiceEvent.call(this);
    keyboardEvent.call(this);
}
