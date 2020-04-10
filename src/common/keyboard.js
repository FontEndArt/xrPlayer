import { changePlayer } from "./control"

// 键盘事件判断
export function handleKeyboard(event) {
    if (event.target.nodeName == "BODY") {
        this.isKeypress = false;
    } else {
        this.isKeypress = true;
    }
    if (event.keyCode == 32) {
        changePlayer.call(this);
    }
}