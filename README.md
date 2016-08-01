# Proxy

This project makes it possible to let multiple clients access to webdashboard

## Config Example

Create 'index.js' under 'config' folder.

    module.exports = {
      server: {
        host: "0.0.0.0",
        port: 5801  
      },
      mjpeg: {
        proxy: "http://localhost:8080/camera.mjpg"
      }
    };
