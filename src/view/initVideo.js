import { videoEvent } from "../common/video";

export function initVideo() {
    const video = document.createElement("video");
    video.src = this.options.src;
    video.preload = 'metadata';

    // 挂载video
    this.videoEl = video;

    videoEvent.call(this, video)
}

export default initVideo