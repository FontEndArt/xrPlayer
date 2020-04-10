import { setPoster } from "../../common/poster.js"

export function poster(parentDom) {
    const createChild = this.common.createChild;
    const posterWarpDom = createChild("div", "xr-poster-wrap");
    const posterDom = createChild("img", "xr-poster", posterWarpDom);

    parentDom && parentDom.appendChild(posterWarpDom);

    const domObj = {
        posterWarpDom,
        posterDom
    }

    this.domEl = Object.assign(this.domEl, domObj);

    setPoster.call(this);

    return domObj
}

export default poster;