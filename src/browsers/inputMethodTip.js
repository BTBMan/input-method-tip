const { BrowserWindow } = require('electron');
const path = require('path');

module.exports = ({ dirname }) => {
    let win;

    const createWindow = () => {
        const options = {
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                preload: path.join(dirname, 'preload', 'index.js'),
            },
        };

        win = new BrowserWindow(options);

        win.loadFile(`${dirname}/renderer/inputMethodTip.html`);

        // 打开Chrome开发者调试工具
        win.webContents.openDevTools();
    };

    const init = () => {
        if (win === null || win === undefined) {
            createWindow();
        } else {
            win.show();
        }
    };

    const getWin = () => win;

    return {
        init,
        getWin,
    };
};