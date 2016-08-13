# Proxy

Proxy will set up a web server to serve WebDashboard static files and proxy requests to vision camera server so as to
make it possible for multiple clients to gain access to vision camera at the same time.

## Requirements

Nodejs 4.0 with `node-gyp`.

## Install

```
git clone https://github.com/ZodiacEFZ/stronghold-vision-mjpeg-proxy/ && cd stronghold-vision-mjpeg-proxy
npm install
npm start
```

## Config Example

Create `index.js` under `config` folder.

    module.exports = {
      server: {
        host: "0.0.0.0",
        port: 5801  
      },
      mjpeg: {
        proxy: "http://localhost:8080/camera.mjpg"
      },
      dashboardPath: "/home/pi/WebDashboard"
    };
