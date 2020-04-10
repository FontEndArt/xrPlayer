export function time(parentDom) {
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

export default time;