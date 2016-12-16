module.exports = {
  "ui": false,
  "files": ['local/**/*'],
  "server": {
    baseDir: 'local/',
    index: 'index.html'
  },
  "proxy": false,
  "port": 33333,
  "middleware": false,
  "serveStatic": [],
  "ghostMode": false,
  "logLevel": "info",
  "logPrefix": "BS",
  "logConnections": false,
  "logFileChanges": true,
  "logSnippet": true,
  "rewriteRules": false,
  "open": false,
  "browser": "default",
  "xip": false,
  "hostnameSuffix": false,
  "reloadOnRestart": false,
  "notify": false,
  "scrollProportionally": true,
  "scrollThrottle": 0,
  "scrollRestoreTechnique": "window.name",
  "scrollElements": [],
  "scrollElementMapping": [],
  "reloadDelay": 0,
  "reloadDebounce": 0,
  "plugins": [],
  "injectChanges": true,
  "startPath": null,
  "minify": true,
  "host": null,
  "codeSync": true,
  "timestamps": true,
  "clientEvents": [
    "scroll",
    "scroll:element",
    "input:text",
    "input:toggles",
    "form:submit",
    "form:reset",
    "click"
  ],
  "socket": {
    "socketIoOptions": {
      "log": false
    },
    "socketIoClientConfig": {
      "reconnectionAttempts": 50
    },
    "path": "/browser-sync/socket.io",
    "clientPath": "/browser-sync",
    "namespace": "/browser-sync",
    "clients": {
      "heartbeatTimeout": 5000
    }
  },
  "tagNames": {
    "less": "link",
    "scss": "link",
    "css": "link",
    "jpg": "img",
    "jpeg": "img",
    "png": "img",
    "svg": "img",
    "gif": "img",
    "js": "script"
  }
};
