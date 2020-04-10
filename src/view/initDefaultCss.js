import { defaultCss } from "../config";

function isDev () {
    return process.env.NODE_ENV == `development`;
};

export function initDefaultCss() {
    defaultCss.forEach(item => {
        const cssPath = isDev() ? item.dev : item.pro;
        cssPath.replace(`{basePath}`, this.options.basePath)
        
        cssPath && this.common.loadCss(cssPath);
    })
}

export default initDefaultCss;