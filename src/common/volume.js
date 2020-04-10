import { removeClass, addClass } from "./index.js";
export function setVolume(value) {
    this.videoEl.volume = value;
    const voiceMarkDom = this.domEl.voiceMarkDom;
    const voiceLineDom = this.domEl.voiceLineDom;
    const voiceDragDom = this.domEl.voiceDragDom;

    if (this.videoEl.volume > 0) {
        removeClass.call(voiceMarkDom, "xr_icon_sound-off");
        addClass.call(voiceMarkDom, "xr_icon_sound-on");
    } else {
        removeClass.call(voiceMarkDom, "xr_icon_sound-on");
        addClass.call(voiceMarkDom, "xr_icon_sound-off");
    }
    const percent = parseInt(value * 100);
    voiceLineDom.style.width = percent + "%";
    voiceDragDom.style.left = percent + "%";
}
