const appConfig = require('./server/config/config').appServer;
const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/mvc-ang')));
app.use(bodyParser.json({
  limit: '20mb'
}));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '20mb'
}));

// Create routes
const routes = require('./server/routes/api.js');
app.use("/api", routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/mvc-ang/index.html'));
});

const server = {
  server: http.createServer(app),
  port: appConfig.port
};

const serverSecure = {
  server: https.createServer(app),
  port: appConfig.secure_port
}

// const port = appConfig.port;
// const server = http.createServer(app);
// const portSecure = appConfig.secure_port;
// const serverSecure = https.createServer(app);

// error handlers
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch unauthorized errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({
      "message": err.name + ": " + err.message
    });
  }
});

// Start Express Server
server.server.listen(server.port, appConfig.host, () => {
  console.log(`Server running on http://${server.server.address().address}:${server.port}`);
});

// Start Secure Express Server
serverSecure.server.listen(serverSecure.port, appConfig.host, () => {
  console.log(`Server running on https://${serverSecure.server.address().address}:${serverSecure.port}`);
});


