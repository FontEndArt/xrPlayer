export function full(parentDom) {
    const createChild = this.common.createChild;
    const fullDom = createChild("span", "xr-control-full xr_icon xr_icon_expand-arrows");

    parentDom && parentDom.appendChild(fullDom);

    return fullDom;
}

export default full;