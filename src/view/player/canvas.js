// import 

export function canvas(parentDom) {
    const createChild = this.common.createChild;
    const canvasDom = createChild("canvas", "xr-video-canvas");

    canvas.width = this.videoEl.width;
    canvas.height = this.videoEl.height;

    parentDom && parentDom.appendChild(canvasDom);
    this.domEl.canvasDom = canvasDom;
    
    return canvasDom;
}

export default canvas;