const remote = require("@electron/remote");
const ipc = require("electron").ipcRenderer;
const path = require('path')

function ensureFirstBackSlash(str) {
  return str.length > 0 && str.charAt(0) !== "/"
      ? "/" + str
      : str;
}

function uriFromPath(_path) {
  const pathName = path.resolve(_path).replace(/\\/g, "/");
  return encodeURI("file://" + ensureFirstBackSlash(pathName));
}

const config = {
  paths:{
    vs:uriFromPath(path.join(__dirname, '../node_modules/monaco-editor/min/vs'))
  }
}


const getCurrentWindow = () => remote.getCurrentWindow();

const openMenu = (x, y, eventId) => {
  ipc.send(`display-app-menu`, { x, y, eventId });
};

const minimizeWindow = (win = getCurrentWindow()) => {
  if (win.minimizable) {
    win.minimize();
  }
};
const maximizeWindow = (win = getCurrentWindow()) => {
  win.maximize();
};
const unMaximizeWindow = (win = getCurrentWindow()) => {
  win.unmaximize();
};
const maxUnmaxWindow = (win = getCurrentWindow()) => {
  if (win.isMaximized()) {
    unMaximizeWindow();
  } else {
    maximizeWindow();
  }
};
const isWindowMaximized = (win = getCurrentWindow()) => win.isMaximized();

const closeWindow = (win = getCurrentWindow()) => win.close();

window.addEventListener("DOMContentLoaded", () => {
  window.openMenu = openMenu;
  window.minimizeWindow = minimizeWindow;
  window.maxUnmaxWindow = maxUnmaxWindow;
  window.closeWindow = closeWindow;
  window.isWindowMaximized = isWindowMaximized;
  window.loaderConfig = config
});
