const {app, BrowserWindow, session} = require('electron') 
const url = require('url') 
const path = require('path')

let win  

function createWindow() { 
   win = new BrowserWindow({
	   width: 640, 
	   height: 575,
      frame:false,
	   webPreferences: {
		nodeIntegration: true,
		webviewTag: true,
	   }
   }) 
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true
   }));
}


app.on('ready', createWindow)