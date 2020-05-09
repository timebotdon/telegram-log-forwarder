// Kill node bot instance
const process = require('process');

function getPid(callback){
  const pid = process.pid;
  return callback(pid);
}

module.exports = {
  getPid
}