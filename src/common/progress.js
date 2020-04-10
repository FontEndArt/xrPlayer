import { getComputedStyle } from "./index.js";

export function setProgressLine(video) {
    video = video || this.videoEl;
    const percent = parseInt(video.currentTime / video.duration * 10000) / 10000;
    const progressWidth = getComputedStyle(this.domEl.progressBarContainerDom).width;
    this.domEl.progressCurrentCircleDom.style.display = "block";
    this.domEl.progressCurrentCircleDom.style.left = percent * parseFloat(progressWidth) + "px";
    this.domEl.progressLineDom.style.width = percent * parseFloat(progressWidth) + "px";
}

