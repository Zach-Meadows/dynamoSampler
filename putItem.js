// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
var creds = new AWS.SharedIniFileCredentials({profile: 'admin'});

// Set the region 
AWS.config.update({region: 'us-east-1', credentials: creds});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  TableName: 'Videos',
  Item: {
    'videoID' : {S: 'Ajfalkub084'},
    'uploadDate' : {S: '10/12/20'}
  }
};

// Call DynamoDB to add the item to the table
ddb.putItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
