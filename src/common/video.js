import { setDurationDom } from "./index.js";
import { setProgressLine } from "./progress.js";
import { changePlayer, changeStatus } from "./control.js";
import { setPoster } from "./poster.js";


export function videoEvent(video) {
    const debug =  this.options.debug;
    video.onloadedmetadata = () => {
        // 设置当前的播放时间点 单位秒
        video.currentTime = this.options.currentTime;
        // 设置进度条
        setProgressLine.call(this, video);

        // 设置总时长
        setDurationDom.call(this, video.duration);

        changeStatus.call(this, true);
    };

    video.onloadstart = () => {
        debug && console.log("loadstart")
    };
    video.ondurationchange = () => {
        debug && console.log("durationchange")
    };
    video.onloadeddata = () => {
        debug && console.log("loadeddata")
    };
    video.onprogress = () => {
        debug && console.log("progress")
    };
    video.oncanplay = () => {
        debug && console.log("canplay")
    };
    video.oncanplaythrough = () => {
        debug && console.log("canplaythrough")
    };
}

export function loadEvent (video) {
    // var _self = this;
    return function load(options) {
        video.src = options.src;
        this.options.autoplay = true;

        changePlayer.call(this);

        setPoster.call(this, options.poster);
    }.bind(this)
}