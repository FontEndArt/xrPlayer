'use strict';

var lodash = require('lodash');

const defaultOptions = {
    width: 600,
    height: 400,
    currentTime: 0,
    volume: 0.5,
    autoplay: false,
    // 是否是播放页
    playerPage: true,
    basePath: ""
};

// {basePath}会被替换成当前js引用路径
const defaultCss = [
    {
        name: "player",
        dev: `/public/player.css`,
        pro: `{basePath}/player.css`,
    },
    {
        name: "xr_icon",
        dev: `//at.alicdn.com/t/font_1741137_x7unuco9bf8.css`,
        pro: ``,
    },
];

// import 

function canvas(parentDom) {
    const createChild = this.common.createChild;
    const canvasDom = createChild("canvas", "xr-video-canvas");

    canvas.width = this.videoEl.width;
    canvas.height = this.videoEl.height;

    parentDom && parentDom.appendChild(canvasDom);
    this.domEl.canvasDom = canvasDom;
    
    return canvasDom;
}

function setPoster(poster) {
    this.domEl.posterDom.setAttribute("src", poster || this.options.poster);
}

function hidePoster() {
    this.domEl.posterWarpDom.style.display = "none";
}

function poster(parentDom) {
    const createChild = this.common.createChild;
    const posterWarpDom = createChild("div", "xr-poster-wrap");
    const posterDom = createChild("img", "xr-poster", posterWarpDom);

    parentDom && parentDom.appendChild(posterWarpDom);

    const domObj = {
        posterWarpDom,
        posterDom
    };

    this.domEl = lodash.assign(this.domEl, domObj);

    setPoster.call(this);

    return domObj
}

function shadow(parentDom) {
    const createChild = this.common.createChild;
    // 屏幕蒙层
    const shadowDom = createChild("div", "xr-player-shadow");
    // 屏幕中央 播放暂停按钮
    const startBarDom = createChild("div", "xr-startBar xr_icon xr_icon_bofangliang", shadowDom);

    parentDom && parentDom.appendChild(shadowDom);
    
    const domObj = {
        shadowDom,
        startBarDom
    };

    this.domEl = lodash.assign(this.domEl, domObj);

    return domObj
}

function progress(parentDom) {
    const createChild = this.common.createChild;
    const progressBarContainerDom = createChild("div", "xr-progress_bar_container");
    const progressListDom = createChild("div", "xr-progress_list", progressBarContainerDom);
    const progressLineDom = createChild("div", "xr-progress_line", progressListDom);
    const progressCurrentCircleDom = createChild("div", "xr-progress_currentCircle", progressLineDom);

    // 进度条

    parentDom && parentDom.appendChild(progressBarContainerDom);

    return {
        progressBarContainerDom,
        progressListDom,
        progressLineDom,
        progressCurrentCircleDom
    }
}

function left_control(parentDom) {
    const createChild = this.common.createChild;
    const leftControlDom = createChild("div", "xr-left-control");

    parentDom && parentDom.appendChild(leftControlDom);

    return leftControlDom;
}

function right_control(parentDom) {
    const createChild = this.common.createChild;
    const rightControlDom = createChild("div", "xr-right-control");

    parentDom && parentDom.appendChild(rightControlDom);

    return rightControlDom;
}

function play(parentDom) {
    const createChild = this.common.createChild;
    const controlPlayDom = createChild("span", "xr-control-play");
    this.common.addClass.call(controlPlayDom, "xr_icon xr_icon_play");

    parentDom && parentDom.appendChild(controlPlayDom);

    return controlPlayDom;
}

function time(parentDom) {
    const createChild = this.common.createChild;

    const proLinesDom = createChild("div", "xr-proLines");
    const currentDom = createChild("span", "xr-control-current");
    const durationDom = createChild("span", "xr-control-duration");
    const proLinesLineDom = document.createTextNode("/");

    currentDom.innerHTML = "00:00:00";
    durationDom.innerHTML = "00:00:00";

    proLinesDom.appendChild(currentDom);
    proLinesDom.appendChild(proLinesLineDom);
    proLinesDom.appendChild(durationDom);

    parentDom && parentDom.appendChild(proLinesDom);

    return {
        proLinesDom,
        currentDom,
        durationDom,
        proLinesLineDom
    };
}

function voice(parentDom) {
    const createChild = this.common.createChild;

    const voiceMarkDom = createChild("div", "xr-control-voice-mark xr_icon xr_icon_sound-on");
    const voiceDom = createChild("div", "xr-control-voice");
    const voiceLineDom = createChild("div", "xr-voiceline", voiceDom);
    const voiceDragDom = createChild("div", "xr-voice-drag", voiceLineDom);

    const voiceOP = document.createDocumentFragment();
    voiceOP.appendChild(voiceMarkDom);
    voiceOP.appendChild(voiceDom);

    parentDom && parentDom.appendChild(voiceOP);

    return {
        voiceMarkDom,
        voiceDom,
        voiceLineDom,
        voiceDragDom,
        voiceOP
    };
}

function full(parentDom) {
    const createChild = this.common.createChild;
    const fullDom = createChild("span", "xr-control-full xr_icon xr_icon_expand-arrows");

    parentDom && parentDom.appendChild(fullDom);

    return fullDom;
}

function control(parentDom) {
    const createChild = this.common.createChild;
    const createBtn = this.common.createBtn;
    const controlWrapDom = createChild("div", "xr-control-wrap");
    const controlDom = createChild("div", "xr-control", controlWrapDom);

    // 进度条
    const {
        progressBarContainerDom,
        progressListDom,
        progressLineDom,
        progressCurrentCircleDom
    } = progress.call(this, controlDom);

    // 左右控制器
    const leftControlDom = left_control.call(this, controlDom);
    const rightControlDom = right_control.call(this, controlDom);

    // ---各种单独的---

    // 播放按钮
    const controlPlayDom = play.call(this);
    // 时间
    const {
        proLinesDom,
        currentDom,
        durationDom,
        proLinesLineDom
    } = time.call(this);

    // 音量
    const {
        voiceOP,
        voiceMarkDom,
        voiceDom,
        voiceLineDom,
        voiceDragDom,
    } = voice.call(this);

    // 全屏
    const fullDom = full.call(this);


    // 左控制器 ---
    createBtn(controlPlayDom, leftControlDom);
    createBtn(proLinesDom, leftControlDom);


    // 右控制器 ---
    createBtn(voiceOP, rightControlDom);
    createBtn(fullDom, rightControlDom);


    parentDom && parentDom.appendChild(controlWrapDom);

    const domObj = {
        controlWrapDom,
        controlDom,
        progressBarContainerDom,
        progressListDom,
        progressLineDom,
        progressCurrentCircleDom,
        leftControlDom,
        rightControlDom,
        controlPlayDom,
        proLinesDom,
        currentDom,
        durationDom,
        proLinesLineDom,
        voiceOP,
        voiceMarkDom,
        voiceDom,
        voiceLineDom,
        voiceDragDom,
        fullDom
    };
    this.domEl = lodash.assign(this.domEl, domObj);

    return domObj
}

function loadJs(url, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    if (typeof (callback) == 'function') {
        script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                callback();
                script.onload = script.onreadystatechange = null;
            }
        };
    }
    head.appendChild(script);
}

function loadCss(url) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
}

function createChild(NodeName, className, parentNode) {
    var nextChild = document.createElement(NodeName);
    className && (nextChild.className = className);
    parentNode && (parentNode.appendChild(nextChild));
    return nextChild;
}

// 创建控制器子功能容器
function createBtn(Node, parentNode) {
    var controlBtn = createChild("div", "xr-control-btn", parentNode);
    controlBtn.appendChild(Node);
    return controlBtn;
}

function getClassNameArr(className) {
    if (typeof className != "string") {
        throw Error("className type is not string");
    }
    return className.replace("  ", " ").split(" ");
}

function addClass(name) {
    const classNameArr = getClassNameArr(this.className);
    if (name.split(" ").length < 2) {
        if (!classNameArr.includes(name.trim())) {
            classNameArr.push(name);
        }
    } else {
        const nameArr = getClassNameArr(name);
        nameArr.map(item => {
            if (!classNameArr.includes(item.trim())) {
                classNameArr.push(item);
            }
        });
    }
    this.className = classNameArr.join(" ");
    return this;
}

function removeClass(name) {
    const classNameArr = getClassNameArr(this.className);
    const resArr = classNameArr.map(item => {
        if (item != name) {
            return item;
        }
    });

    this.className = resArr.join(" ");
    return this;
}

// 时长换算 秒换算为时分秒
const Convert = function (seconds) {
    var hh, mm, ss;
    if (seconds == null || seconds < 0) {
        return
    }
    hh = seconds / 3600 | 0;
    seconds = parseInt(seconds) - hh * 3600;
    if (parseInt(hh) < 10) { hh = "0" + hh; }
    mm = seconds / 60 | 0;
    ss = parseInt(seconds) - mm * 60;
    if (parseInt(mm) < 10) { mm = "0" + mm; }
    if (ss < 10) { ss = "0" + ss; }
    return hh + ":" + mm + ":" + ss;
};

function getComputedStyle$1(el) {
    return el.currentStyle || window.getComputedStyle(el, null);
}

function setDurationDom(second) {
    const time = Convert(parseInt(second));
    this.domEl.durationDom.innerHTML = time;
}

function setCurrentDom(second) {
    const time = Convert(parseInt(second));
    this.domEl.currentDom.innerHTML = time;
}

var common = {
    loadJs,
    loadCss,
    createChild,
    createBtn,
    addClass,
    removeClass,
    Convert,
};

function setProgressLine(video) {
    video = video || this.videoEl;
    const percent = parseInt(video.currentTime / video.duration * 10000) / 10000;
    const progressWidth = getComputedStyle$1(this.domEl.progressBarContainerDom).width;
    this.domEl.progressCurrentCircleDom.style.display = "block";
    this.domEl.progressCurrentCircleDom.style.left = percent * parseFloat(progressWidth) + "px";
    this.domEl.progressLineDom.style.width = percent * parseFloat(progressWidth) + "px";
}

// 播放时的处理 获取视频内容进行播放
function loadCanvas$1() {
    const _self = this;
    const playerDom = this.domEl.playerDom;
    const video = this.videoEl;
    const canvas = this.domEl.canvasDom;
    const ctx = canvas.getContext('2d');

    this.Timer = window.setInterval(function () {
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
        
        ctx.drawImage(video, drawStartX, drawStartY, drawWidth, drawHeight);

        // 更新当前时间
        setCurrentDom.call(_self, video.currentTime);

        // 根据当前时间计算进度条位置
        setProgressLine.call(_self);

        // 播放完毕则停止播放
        if (video.ended) EndVideo.call(_self);
    }, 0);
}

// 改变播放器的状态
function changeStatus(bool, isPaused) {
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
const videoPlay = function () {
    const _self = this;
    loadCanvas$1.call(this);
    const promise = this.videoEl.play();
    promise.then(function () {
        // 隐藏封面图层
        hidePoster.call(_self);
        if (_self.options.autoplay) {
            changeStatus.call(_self, false, true); // 切换按钮状态
        }
    }).catch(function (err) {
        // 不支持自动播放
        if (_self.options.autoplay) {
            // 触发式自动播放
            setAutoPlayWhenClick.call(_self);
        }
    });
};

// 视频暂停
const videoPause = function () {
    const _self = this;
    this.videoEl.pause();
    loadCanvas$1.call(this);
    setTimeout(function () {
        clearInterval(_self.Timer);
        _self.Timer = null;
    }, 0);
};

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

function changePlayer(event) {
    event && event.preventDefault();
    changeStatus.call(this, false); // 切换按钮状态
    if (this.videoEl.paused) {
        videoPlay.call(this);
    } else {
        videoPause.call(this);
    }
}


// 结束视频
const EndVideo = function () {
    videoPause.call(this);
    setCurrentDom.call(this, 0);
    setProgressLine.call(this);
    changeStatus.call(this, true); // 显示开始
};

function videoEvent(video) {
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
        console.log("loadstart");
    };
    video.ondurationchange = () => {
        console.log("durationchange");
    };
    video.onloadeddata = () => {
        console.log("loadeddata");
    };
    video.onprogress = () => {
        console.log("progress");
    };
    video.oncanplay = () => {
        console.log("canplay");
    };
    video.oncanplaythrough = () => {
        console.log("canplaythrough");
    };
}

function initVideo() {
    const video = document.createElement("video");
    video.src = this.options.src;
    video.preload = 'metadata';

    // 挂载video
    this.videoEl = video;

    videoEvent.call(this, video);
}

function isDev () {
    return process.env.NODE_ENV == `development`;
}
function initDefaultCss() {
    defaultCss.forEach(item => {
        const cssPath = isDev() ? item.dev : item.pro;
        cssPath.replace(`{basePath}`, this.options.basePath);
        
        cssPath && this.common.loadCss(cssPath);
    });
}

function getWH(value) {
    let strValue = value.toString();
    let end = strValue.charAt(strValue.length - 1);
    return isNaN(+end) ? value : (value + "px");
}

function initPlayerDom() {
    const playerDom = document.querySelector(this.options.el);
    this.common.addClass.call(playerDom, "xr-player-dom");

    playerDom.style.width = getWH(this.options.width);
    playerDom.style.height = getWH(this.options.height);

    const boxWidth = parseFloat(getComputedStyle$1(playerDom).width);
    const boxHeight = parseFloat(getComputedStyle$1(playerDom).height);

    this.videoEl.width = boxWidth;
    this.videoEl.height = boxHeight;

    this.domEl.playerDom = playerDom;

    return playerDom;
}

function setVolume(value) {
    this.videoEl.volume = value;
    const voiceMarkDom = this.domEl.voiceMarkDom;
    const voiceLineDom = this.domEl.voiceLineDom;
    const voiceDragDom = this.domEl.voiceDragDom;

    if (this.videoEl.volume > 0) {
        removeClass.call(voiceMarkDom, "xr_icon_sound-off");
        addClass.call(voiceMarkDom, "xr_icon_sound-on");
    } else {
        removeClass.call(voiceMarkDom, "xr_icon_sound-on");
        addClass.call(voiceMarkDom, "xr_icon_sound-off");
    }
    const percent = parseInt(value * 100);
    voiceLineDom.style.width = percent + "%";
    voiceDragDom.style.left = percent + "%";
}

// 键盘事件判断
function handleKeyboard(event) {
    if (event.target.nodeName == "BODY") {
        this.isKeypress = false;
    } else {
        this.isKeypress = true;
    }
    if (event.keyCode == 32) {
        changePlayer.call(this);
    }
}

// 取消全屏
function cancelFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExiFullscreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

// element元素全屏
function onFullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen();
    }
}

// 播放/暂停
const playEvent = function () {
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
};

// 监听全屏变化
const fullScreen = function () {
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
            }, 0);
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
    });
};

const progressEvent = function () {
    const _self = this;
    const video = this.videoEl;
    const playerDom = this.domEl.playerDom;
    const progress = this.domEl.progressBarContainerDom;

    // 进度条事件
    progress.addEventListener("mousedown", function (event) {
        const progressLeft = this.getBoundingClientRect().left;
        const progressWidth = this.offsetWidth;
        const html = document.getElementsByTagName("html")[0];

        function docMove(event) {
            let left = (event.pageX - progressLeft) / progressWidth;
            if (left < 0) { left = 0; }
            if (left > 1) { left = 1; }
            video.currentTime = left * video.duration;
            setProgressLine.call(_self);
            html.style.cursor = "pointer";
        }
        function docUp(event) {
            let left = (event.pageX - progressLeft) / progressWidth;
            if (left < 0) { left = 0; }
            if (left > 1) { left = 1; }
            video.currentTime = left * video.duration;
            setProgressLine.call(_self);
            html.style.cursor = "auto";
            document.removeEventListener("mousemove", docMove);
            document.removeEventListener("mouseup", docUp);
            clearInterval(_self.Timer);
            videoPlay.call(_self);
        }

        document.addEventListener("mousemove", docMove);
        document.addEventListener("mouseup", docUp);

    });
};

const voiceEvent = function () {
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
    });
    // 音量
    voiceDom.addEventListener("mousedown", function (event) {
        const voiceLeft = this.getBoundingClientRect().left;
        const voiceWidth = this.offsetWidth;
        const html = document.getElementsByTagName("html")[0];

        function docMove(event) {
            let left = (event.pageX - voiceLeft) / voiceWidth;
            if (left < 0) { left = 0; }
            if (left > 1) { left = 1; }
            setVolume.call(_self, left);
            html.style.cursor = "pointer";
        }
        function docUp(event) {
            let left = (event.pageX - voiceLeft) / voiceWidth;
            if (left < 0) { left = 0; }
            if (left > 1) { left = 1; }
            setVolume.call(_self, left);
            html.style.cursor = "auto";
            document.removeEventListener("mousemove", docMove);
            document.removeEventListener("mouseup", docUp);
        }

        document.addEventListener("mousemove", docMove);
        document.addEventListener("mouseup", docUp);
    });
};

const keyboardEvent = function () {
    const _self = this;
    const playerDom = this.domEl.playerDom;

    // 是否是播放页
    if (!_self.options.playerPage) {
        // 是否播放的状态切换
        document.addEventListener("click", function () {
            _self.isPlayer = false;
        });
        playerDom.addEventListener("click", function () {
            event.stopPropagation();
            _self.isPlayer = true;
        });

        document.onkeypress = function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (_self.isPlayer) {
                handleKeyboard.call(_self, event);
            }
        };
    } else {
        document.onkeypress = function (event) {
            handleKeyboard.call(_self, event);
        };
    }
};

const initEvent = function () {
    playEvent.call(this);
    fullScreen.call(this);
    progressEvent.call(this);
    voiceEvent.call(this);
    keyboardEvent.call(this);
};

// 构造完所有元素后进行的
function initPlayerEvent() {
    // 设置时间
    setVolume.call(this, this.options.volume);
    // 挂载所有事件
    initEvent.call(this);
}

const initPlayer = function () {

    console.log(this.options);

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

    console.log(this.domEl);

    // 所有dom构造结束后进行
    initPlayerEvent.call(this);

    if (this.options.autoplay) {
        changeStatus.call(this, false);
        videoPlay.call(this);
    }

    return this
};

// 定义当前js引用路径
//->https://xxx.com/ProjectName/statics/xjo/
(function (defaultOptions) {
    const tags = document.getElementsByTagName("script");
    try {
        const path = tags[tags.length - 1].getAttribute("src");
        const basePath = path.substring(0, path.lastIndexOf("/") + 1);
        defaultOptions.basePath = path.substring(0, path.lastIndexOf("/") + 1);
    } catch {
        tags.forEach(item => {
            if (item.getAttribute("src").indexOf("xr_player") > -1) {
                const path = item.getAttribute("src");
                defaultOptions.basePath = path.substring(0, path.lastIndexOf("/") + 1);
            }
        });
    }
})(defaultOptions);

function xrPlayer(options) {

    // 合并配置项
    this.options = lodash.assignIn(defaultOptions, options);

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

module.exports = xrPlayer;
