const { app, BrowserWindow } = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({
    width: 896,
    height: 504,
    x: 1024,
    y: 576,
    darkTheme: true,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    resizable: false,
    fullscreen: true,
    frame: false,
    backgroundColor: '#2e2c29',
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})