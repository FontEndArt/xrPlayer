import { defaultCss } from "../config";
import { loadCss } from "../common/index";

function isDev () {
    return process.env.NODE_ENV == `development`;
};

export function initDefaultCss() {
    defaultCss.forEach(item => {
        let cssPath = isDev() ? item.dev : item.pro;
        cssPath = cssPath.replace(`{baseHost}`, this.options.baseHost)
        cssPath = cssPath.replace(`{basePath}`, this.options.basePath)

        cssPath && loadCss(cssPath);
    })
}

export default initDefaultCss;