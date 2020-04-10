export function right_control(parentDom) {
    const createChild = this.common.createChild;
    const rightControlDom = createChild("div", "xr-right-control");

    parentDom && parentDom.appendChild(rightControlDom);

    return rightControlDom;
}

export default right_control;