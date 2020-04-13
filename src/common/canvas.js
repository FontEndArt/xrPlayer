import { setCurrentDom } from "./index";
import { setProgressLine } from "./progress";
import { EndVideo } from "./control";


export function refreshCanvas(bool) {
    const _self = this;
    const playerDom = this.domEl.playerDom;
    const video = this.videoEl;
    const canvas = this.domEl.canvasDom;
    const ctx = canvas.getContext('2d');

    // 设置高度
    const boxW = parseFloat(getComputedStyle(playerDom).width);
    const boxH = parseFloat(getComputedStyle(playerDom).height);

    canvas.width = boxW;
    canvas.height = boxH;

    // 计算宽高
    var scale = boxW / boxH;
    var vScale = video.videoWidth / video.videoHeight;

    var drawWidth = canvas.width;
    var drawHeight = canvas.height;


    var drawStartX = 0;
    var drawStartY = 0;

    if (scale > vScale) {
        var w = boxH * video.videoWidth / video.videoHeight;
        drawStartX = (boxW - w) / 2;
        drawWidth = w;
    } else {
        var h = boxW * video.videoHeight / video.videoWidth;
        drawStartY = (boxH - h) / 2;
        drawHeight = h;
    }

    ctx.drawImage(video, drawStartX, drawStartY, drawWidth, drawHeight)

    // 更新当前时间
    setCurrentDom.call(_self, video.currentTime);

    // 根据当前时间计算进度条位置
    setProgressLine.call(_self);

    // 播放完毕则停止播放
    if (video.ended && !bool) EndVideo.call(_self);
}


// 播放时的处理 获取视频内容进行播放
export function loadCanvas() {
    this.Timer = window.setInterval(refreshCanvas.bind(this), 0);
}