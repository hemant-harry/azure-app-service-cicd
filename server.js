
const http = require("http");

const port = process.env.PORT || 8080;

// Read configuration from Azure App Service environment variables
const appName = process.env.APP_NAME || "Azure Node App";
const appEnv = process.env.APP_ENV || "development";

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${appName}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 760px;
      margin: 60px auto;
      padding: 0 20px;
      line-height: 1.6;
    }
    .card {
      border: 1px solid #ddd;
      border-radius: 12px;
      padding: 28px;
    }
    .badge {
      display: inline-block;
      padding: 5px 10px;
      border-radius: 20px;
      background: #e7f7ec;
      color: #176b35;
    }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge">Application is running</span>
    <h1>${appName} - Version 2</h1>
    <p><strong>Environment:</strong> ${appEnv}</p>
    <p><strong>Runtime:</strong> Node.js</p>
    <p><strong>Path:</strong> ${req.url}</p>
  </div>
</body>
</html>`);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
