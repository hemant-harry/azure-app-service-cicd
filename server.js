const http = require("http");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Azure App Service Demo</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 760px; margin: 60px auto; padding: 0 20px; line-height: 1.6; }
    .card { border: 1px solid #ddd; border-radius: 12px; padding: 28px; }
    .badge { display: inline-block; padding: 5px 10px; border-radius: 20px; background: #e7f7ec; color: #176b35; }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge">Application is running</span>
    <h1>Hello from Node.js on Azure App Service Deployment using FTP  in Azure !</h1>
    <p>Your ZIP deployment worked if you can see this page.</p>
    <p><strong>Runtime:</strong> Node.js</p>
    <p><strong>Path:</strong> ${req.url}</p>
  </div>
</body>
</html>`);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
