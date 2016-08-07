# Proxy

This project makes it possible for multiple clients to gain access to webdashboard at the same time.

## Config Example

Create 'index.js' under 'config' folder.

    module.exports = {
      server: {
        host: "0.0.0.0",
        port: 5801  
      },
      mjpeg: {
        proxy: "http://localhost:8080/camera.mjpg"
      },
      dashboardPath: "~/WebDashboard"
    };
