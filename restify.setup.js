const path = require('path');
const Restapify = require('restapify').default

const approotDir = path.resolve(__dirname, './mocked-apis')
const serverPort = 6767; // <-- get the process used port
const rpfy = new Restapify({ rootDir: approotDir,openDashboard: false })

console.log("route", rpfy.getServedRoutes());

rpfy.on('error', ({error, message}) => {
   console.log(error + ' ' + message)
})

rpfy.on('start', () => {
  console.log(`restapify API is served at ${rpfy.publicPath}`);
})

rpfy.run({port: serverPort})