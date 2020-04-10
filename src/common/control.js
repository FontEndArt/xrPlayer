import { removeClass, addClass, setCurrentDom } from "./index.js";
import { hidePoster } from "./poster.js";
import { loadCanvas } from "./canvas.js";

// 改变播放器的状态
export function changeStatus(bool, isPaused) {
    const controlPlayDom = this.domEl.controlPlayDom;
    const startBarDom = this.domEl.startBarDom;
    if (this.videoEl.paused && !bool || isPaused) {
        // 显示开始标志
        removeClass.call(controlPlayDom, "xr_icon_play");
        addClass.call(controlPlayDom, "xr_icon_pause");

        removeClass.call(startBarDom, "xr_icon_bofangliang");
        addClass.call(startBarDom, "xr_icon_zanting1");

        startBarDom.style.display = "none";
    } else {
        // 显示停止标志
        removeClass.call(controlPlayDom, "xr_icon_pause");
        addClass.call(controlPlayDom, "xr_icon_play");

        removeClass.call(startBarDom, "xr_icon_zanting1");
        addClass.call(startBarDom, "xr_icon_bofangliang");

        startBarDom.style.display = "block";
    }
}


// 视频播放
export const videoPlay = function () {
    const _self = this;
    loadCanvas.call(this);
    const promise = this.videoEl.play();
    promise.then(function () {
        // 隐藏封面图层
        hidePoster.call(_self);
        if (_self.options.autoplay) {
            changeStatus.call(_self, false, true); // 切换按钮状态
        }
    }).catch(function (err) {
        console.log(111);
        // 不支持自动播放
        if (_self.options.autoplay) {
            // 触发式自动播放
            setAutoPlayWhenClick.call(_self);
        }
    });
}

// 视频暂停
export const videoPause = function () {
    const _self = this;
    this.videoEl.pause();
    loadCanvas.call(this);
    setTimeout(function () {
        clearInterval(_self.Timer);
        _self.Timer = null;
    }, 0)
}

function setAutoPlayWhenClick() {
    const _self = this;
    function setAutoPlay() {
        // 设置自动播放为true
        videoPlay.call(_self);
        window.top.document.removeEventListener('click', setAutoPlay);
        window.top.document.removeEventListener('touchend', setAutoPlay);
    }
    window.top.document.addEventListener('click', setAutoPlay);
    window.top.document.addEventListener('touchend', setAutoPlay);
}

export function changePlayer(event) {
    event && event.preventDefault();
    changeStatus.call(this, false); // 切换按钮状态
    if (this.videoEl.paused) {
        videoPlay.call(this);
    } else {
        videoPause.call(this);
    }
}


// 结束视频
export const EndVideo = function () {
    videoPause.call(this);
    setCurrentDom(this, 0);
    setProgressLine.call(this);
    changeStatus.call(this, true); // 显示开始
}









