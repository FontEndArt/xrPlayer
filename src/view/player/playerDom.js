import { getComputedStyle } from "../../common/index";

function getWH(value) {
    let strValue = value.toString();
    let end = strValue.charAt(strValue.length - 1);
    return isNaN(+end) ? value : (value + "px");
}

export function initPlayerDom() {
    const playerDom = document.querySelector(this.options.el);
    this.common.addClass.call(playerDom, "xr-player-dom");

    playerDom.style.width = getWH(this.options.width);
    playerDom.style.height = getWH(this.options.height);

    const boxWidth = parseFloat(getComputedStyle(playerDom).width)
    const boxHeight = parseFloat(getComputedStyle(playerDom).height);

    this.videoEl.width = boxWidth;
    this.videoEl.height = boxHeight;

    this.domEl.playerDom = playerDom;

    return playerDom;
}

export default initPlayerDom;