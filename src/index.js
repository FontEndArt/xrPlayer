import { assignIn } from "lodash";
import { defaultOptions } from "./config.js";
import initPlayer from "./view/initPlayer.js";
import common from "./common/index.js";

// 定义当前js引用路径
//->https://xxx.com/ProjectName/statics/xjo/
(function (defaultOptions) {
    function find(str, cha, num) {
        var x = str.indexOf(cha);
        for (var i = 0; i < num - 1; i++) {
            x = str.indexOf(cha, x + 1);
        }
        return x;
    }
    const tags = document.getElementsByTagName("script");
    try {
        let path = tags[tags.length - 1].getAttribute("src");
        defaultOptions.basePath = path.substring(0, path.lastIndexOf("/") + 1);
    } catch {
        for (let i = tags.length - 1; i >= 0; i--) {
            let item = tags[i];
            if (item.getAttribute("src") && (item.getAttribute("src").indexOf("xrplayer") > -1)) {
                let path = item.getAttribute("src");
                defaultOptions.basePath = path.substring(0, path.lastIndexOf("/") + 1);
            }
        }
    }
    defaultOptions.baseHost = defaultOptions.basePath.substring(0, find(defaultOptions.basePath, "/", 3));
})(defaultOptions)

function xrPlayer(options) {
    // 合并配置项
    this.options = assignIn(defaultOptions, options);

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