const { app, BrowserWindow } = require('electron');
const path = require('path');

// 关掉安全策略警告
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

// 热重载
require('electron-reload')(__dirname, {
    electron: path.join(process.cwd(), 'node_modules', '.bin', 'electron'),
});

const browsers = require('./browsers')({
    dirname: __dirname,
});
const { inputMethodTip, settings } = browsers;

// electron完成后执行的函数
app.whenReady().then(() => {
    inputMethodTip.init();

    // 程序点击图标激活时
    app.on('activate', function () {
        // 没有打开的窗口
        if (BrowserWindow.getAllWindows().length === 0) {
            inputMethodTip.init();
        }
    });
});

// 程序所有窗口退出时
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
