export function left_control(parentDom) {
    const createChild = this.common.createChild;
    const leftControlDom = createChild("div", "xr-left-control");

    parentDom && parentDom.appendChild(leftControlDom);

    return leftControlDom;
}

export default left_control;