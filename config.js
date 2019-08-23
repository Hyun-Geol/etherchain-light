var web3 = require('web3');
var net = require('net');

var config = function () {
  
  this.logFormat = "combined";
  //this.ipcPath = process.env["HOME"] + "/.local/share/io.parity.ethereum/jsonrpc.ipc";
  this.ipcPath = "\\\\.\\pipe\\jsonrpc.ipc"
  this.provider = new web3.providers.IpcProvider(this.ipcPath, net);
  
  this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css";
  
  this.names = {
    "0x7Ea9e8712F5e603a99aeB1A222E1668671C0570D": "ICTJHG"   
  }
  
}

module.exports = config;