import progress from "./control/progress"
import leftControl from "./control/left_control"
import rightControl from "./control/right_control"
import play from "./control/play"
import time from "./control/time"
import voice from "./control/voice"
import full from "./control/full"

export function control(parentDom) {
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
    const leftControlDom = leftControl.call(this, controlDom);
    const rightControlDom = rightControl.call(this, controlDom);

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
    }
    this.domEl = Object.assign(this.domEl, domObj);

    return domObj
}

export default control;