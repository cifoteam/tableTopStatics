const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler =  (event, context, callback) => {
    console.log(event);
    var bodyJSON = JSON.parse(event.body);
    
    var userId = bodyJSON.userId || null;
    var creationTimestamp = bodyJSON.creationTimestamp || null;
    //let timestampEpoch = new Date().getTime();
    //console.log("timestampEpoch", timestampEpoch);
    console.log("userId", userId);
    console.log("creationTimestamp", creationTimestamp);

    deleteTodo(userId, creationTimestamp).then(() => {
        callback(
            null,
            {
                statusCode: 200,
                body: JSON.stringify({
                    "deleted": true,
                    "userId": userId,
                    "creationTimestamp": creationTimestamp
                    
                })
            }
        );
    });
    function deleteTodo(userid, creationtimestamp) {
        return ddb.delete({
            TableName: 'USERS_BGG',
            Key: { userId : userid, creationTimestamp : creationtimestamp },
        }).promise();
    }
};