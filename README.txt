Azure App Service - Node.js ZIP Deployment Demo

Contents:
- package.json: defines the app and the start command
- server.js: minimal HTTP web server

Deployment notes:
1. Upload this ZIP through the App Service deployment method currently selected in the Azure Portal.
2. The ZIP contains package.json and server.js at its root (not inside another folder).
3. The app uses process.env.PORT when provided by the hosting environment.
4. After deployment, open the Web App's Default domain / Browse option.
5. If the page does not load, check App Service logs and deployment logs.

This minimal app uses only Node.js built-in modules and has no npm dependencies.
