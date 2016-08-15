# stronghold-vision-mjpeg-proxy

Proxy will set up a web server to serve WebDashboard static files and proxy requests to vision camera server so as to
make it possible for multiple clients to gain access to vision camera at the same time.

## Requirements

Nodejs 4.0 with `node-gyp`.

## Installation

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
    
## License

MIT

声明：我们允许组织以及个人将此项目用于商业行为，没有任何限制。
但**请带上本项目的许可证 `MIT`**，并**附上原作者以及项目的地址**。我们保留对该项目的最终解释权。
