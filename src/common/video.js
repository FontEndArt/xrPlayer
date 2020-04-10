import { setDurationDom } from "./index.js";
import { setProgressLine } from "./progress.js";
import { changeStatus } from "./control.js";


export function videoEvent(video) {
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
        console.log("loadstart")
    };
    video.ondurationchange = () => {
        console.log("durationchange")
    };
    video.onloadeddata = () => {
        console.log("loadeddata")
    };
    video.onprogress = () => {
        console.log("progress")
    };
    video.oncanplay = () => {
        console.log("canplay")
    };
    video.oncanplaythrough = () => {
        console.log("canplaythrough")
    };
}
