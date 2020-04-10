export function setPoster(poster) {
    this.domEl.posterDom.setAttribute("src", poster || this.options.poster);
}

export function hidePoster() {
    this.domEl.posterWarpDom.style.display = "none";
}

export function showPoster() {
    this.domEl.posterWarpDom.style.display = "block";
}
