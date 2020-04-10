export function progress(parentDom) {
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

export default progress;