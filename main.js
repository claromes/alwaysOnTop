const { app, BrowserWindow, nativeImage } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
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
    backgroundColor: '#2f3241',
    icon: nativeImage.createFromPath('./nountop.png'),
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