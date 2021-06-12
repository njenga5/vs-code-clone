const { BrowserWindow, app, ipcMain } = require("electron");
const path = require("path");
const { createMenu } = require("./menu");
require("@electron/remote/main").initialize();
let win;
const createWindow = () => {
  win = new BrowserWindow({
    width: 1000,
    minWidth: 600,
    minHeight: 600,
    backgroundColor: "#292D3E",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      webSecurity: false,
    },
    frame: false,
    icon: path.join(__dirname, "favicon.ico"),
  });

  win.loadURL("http://localhost:3000");
};

const isWindows = process.platform === "win32";

ipcMain.on(`display-app-menu`, (e, args) => {
  if (isWindows && win) {
    const options = {
      window: win,
      x: parseInt(args.x, 10),
      y: parseInt(args.y, 10),
    };
    createMenu(options, args.eventId);
  }
});
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
