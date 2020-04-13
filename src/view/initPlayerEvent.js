import { setVolume } from "../common/volume";
import { initEvent, addListenerEvent } from "../common/event";

// 构造完所有元素后进行的
export function initPlayerEvent() {
    // 设置时间
    setVolume.call(this, this.options.volume);
    // 挂载所有事件
    initEvent.call(this);

    this.addListener = addListenerEvent.call(this)
}

export default initPlayerEvent;