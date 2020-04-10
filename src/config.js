export const defaultOptions = {
    width: 600,
    height: 400,
    currentTime: 0,
    volume: 0.5,
    autoplay: false,
    // 是否是播放页
    playerPage: true,
    basePath: ""
}

// {basePath}会被替换成当前js引用路径
export const defaultCss = [
    {
        name: "player",
        dev: `/public/player.css`,
        pro: `{basePath}/player.css`,
    },
    {
        name: "xr_icon",
        dev: `//at.alicdn.com/t/font_1741137_x7unuco9bf8.css`,
        pro: ``,
    },
]

export default { defaultOptions };