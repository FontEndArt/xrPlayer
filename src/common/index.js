export function loadJs(url, callback) {
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

export function loadCss(url) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
}

export function createChild(NodeName, className, parentNode) {
    var nextChild = document.createElement(NodeName);
    className && (nextChild.className = className);
    parentNode && (parentNode.appendChild(nextChild));
    return nextChild;
}

// 创建控制器子功能容器
export function createBtn(Node, parentNode) {
    var controlBtn = createChild("div", "xr-control-btn", parentNode)
    controlBtn.appendChild(Node);
    return controlBtn;
}

function getClassNameArr(className) {
    if (typeof className != "string") {
        throw Error("className type is not string");
    }
    return className.replace("  ", " ").split(" ");
}

export function addClass(name) {
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
        })
    }
    this.className = classNameArr.join(" ")
    return this;
}

export function removeClass(name) {
    const classNameArr = getClassNameArr(this.className);
    const resArr = classNameArr.map(item => {
        if (item != name) {
            return item;
        }
    })

    this.className = resArr.join(" ");
    return this;
}

// 时长换算 秒换算为时分秒
export const Convert = function (seconds) {
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
}

export function getComputedStyle(el) {
    return el.currentStyle || window.getComputedStyle(el, null);
}

export function setDurationDom(second) {
    const time = Convert(parseInt(second));
    this.domEl.durationDom.innerHTML = time;
}

export function setCurrentDom(second) {
    const time = Convert(parseInt(second));
    this.domEl.currentDom.innerHTML = time;
}

export default {
    createChild,
    createBtn,
    addClass,
    removeClass,
};