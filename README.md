# QR Code Generator

This application generate QR Codes for each line in teh text area.

## Build using the libraries:

THis is a React project build using the following libraries:

npx create-react-app qr-code-generator
npm install --save react-qr-code
npm install --save bootstrap
npm install --save react-bootstrap
npm install --save @fortawesome/fontawesome-free
npm install --save react-to-print
npm install gh-pages --save-dev


## Deploy to githup pages:

1. Add properties to package.json file:

At the top level add the following line:

"homepage": "http://{username}.github.io/{repo-name}"

At the "scripts" level add:

"predeploy": "npm run build",
"deploy": "gh-pages -d build"

2. Create a repo manualy on Github.

3. In the project directory run the following commands:

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/{username}/{repo-name}.git
git push -u origin main

4. Run the following command to deploy the solution on Github pages:

npm run deploy



