import { canvas, poster, shadow, control } from "./player/index.js";
import initVideo from "./initVideo";
import initDefaultCss from "./initDefaultCss";
import initPlayerDom from "./player/playerDom";
import initPlayerEvent from "./initPlayerEvent";
import { changeStatus, videoPlay } from "../common/control";

export const initPlayer = function () {

    // console.log(this.options);

    // 挂载css
    initDefaultCss.call(this);

    // 挂载videoEl
    initVideo.call(this);

    // 初始化播放器dom存放Object
    this.domEl = {};

    // 初始化播放器容器
    const playerDom = initPlayerDom.call(this);

    // canvas
    canvas.call(this, playerDom);
    // 封面
    poster.call(this, playerDom);
    // 蒙层
    shadow.call(this, playerDom);
    // 控制栏
    control.call(this, playerDom);

    // 所有dom构造结束后进行
    initPlayerEvent.call(this);

    if (this.options.autoplay) {
        changeStatus.call(this, false);
        videoPlay.call(this);
    }

    return this
}

export default initPlayer;