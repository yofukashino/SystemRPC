import { BrowserWindow, app } from "electron";
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";
import isDev from "electron-is-dev";
import { configPath } from "@rpc";

console.log(configPath);
function createWindow() {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      sandbox: true,
    },
  });
  console.log(isDev);
  if (isDev) {
    win.loadURL("http://localhost:3000/index.html");
  } else {
    win.loadURL(`file://${__dirname}/../index.html`);
  }

  // DevTools
  installExtension(REACT_DEVELOPER_TOOLS, true)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log("An error occurred: ", err));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  createWindow();
});
