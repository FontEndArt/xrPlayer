export function shadow(parentDom) {
    const createChild = this.common.createChild;
    // 屏幕蒙层
    const shadowDom = createChild("div", "xr-player-shadow");
    // 屏幕中央 播放暂停按钮
    const startBarDom = createChild("div", "xr-startBar xr_icon xr_icon_bofangliang", shadowDom);

    parentDom && parentDom.appendChild(shadowDom);
    
    const domObj = {
        shadowDom,
        startBarDom
    }

    this.domEl = Object.assign(this.domEl, domObj);

    return domObj
}

export default shadow;