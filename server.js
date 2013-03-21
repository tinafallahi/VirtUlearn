var http = require("http");
var azure = require('azure');

var storageAccount = "virtulearnstudents";
var accessKey = "AacyAmuNenRszqPy9i3RnfSsYnJ3FKqXMfl+Qft1qMp5Vuy1YTTenIVX2D/op+jhXrEDrAv+wwbR8ckFeT/EwQ==";
var containerName = "YAY";

http.createServer(function (req, res) {
                    res.writeHead(200, {"Content-Type": "text/plain"});
                    res.end("Hello Node.js and Windows Azure Website!\n");
                  
                    var blobService = azure.createBlobService(storageAccount,accessKey);
                    blobService.createContainerIfNotExists(containerName, function(error){
                                  if(!error){
                                  // Container exists and is private
                        }
                    });
                    
                    }).listen(process.env.port);
 
console.log("Server started.");