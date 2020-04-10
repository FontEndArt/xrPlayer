import { defaultOptions } from "./config.js";
import initPlayer from "./view/initPlayer.js";
import common from "./common/index.js";

// 定义当前js引用路径
//->https://xxx.com/ProjectName/statics/xjo/
(function (defaultOptions) {
    const tags = document.getElementsByTagName("script");
    const path = tags[tags.length - 1].getAttribute("src");
    defaultOptions.basePath = path.substring(0, path.lastIndexOf("/") + 1);
})(defaultOptions)

function xrPlayer(options) {
    // TODO: 深拷贝目前是JQuery，考虑换到lodash
    this.options = $.extend(true, defaultOptions, options);

    // 总变量
    this.Timer = null;
    // 记录全屏
    this.fullscreen = null;
    // 记录音量
    this.oldVolume = 0;
    // 是否选中了播放器
    this.isPlayer = false;
    // 是否键盘事件
    this.isKeypress = false;

    return initPlayer.call(this);
}

// 挂载公共方法
xrPlayer.prototype.common = common;

export default xrPlayer;