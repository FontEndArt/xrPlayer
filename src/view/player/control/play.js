export function play(parentDom) {
    const createChild = this.common.createChild;
    const controlPlayDom = createChild("span", "xr-control-play");
    this.common.addClass.call(controlPlayDom, "xr_icon xr_icon_play")

    parentDom && parentDom.appendChild(controlPlayDom);

    return controlPlayDom;
}

export default play;