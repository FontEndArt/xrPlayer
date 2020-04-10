export function voice(parentDom) {
    const createChild = this.common.createChild;

    const voiceMarkDom = createChild("div", "xr-control-voice-mark xr_icon xr_icon_sound-on");
    const voiceDom = createChild("div", "xr-control-voice");
    const voiceLineDom = createChild("div", "xr-voiceline", voiceDom);
    const voiceDragDom = createChild("div", "xr-voice-drag", voiceLineDom);

    const voiceOP = document.createDocumentFragment();
    voiceOP.appendChild(voiceMarkDom);
    voiceOP.appendChild(voiceDom);

    parentDom && parentDom.appendChild(voiceOP);

    return {
        voiceMarkDom,
        voiceDom,
        voiceLineDom,
        voiceDragDom,
        voiceOP
    };
}

export default voice;