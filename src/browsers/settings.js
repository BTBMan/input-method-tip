const { BrowserWindow } = require('electron');

module.exports = ({ dirname }) => {
    let win;

    const createWindow = () => {
        const options = {
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
            },
        };

        win = new BrowserWindow(options);

        win.loadFile(`${dirname}/renderer/settings.html`);

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
