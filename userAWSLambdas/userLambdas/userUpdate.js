const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log(event);
    
        
    var bodyJSON = JSON.parse(event.body);

    updateUser(bodyJSON).then((response) => {
        callback(null,
            {
                statusCode: 200,
                body: JSON.stringify(response)
            }
        );
    });

}
async function updateUser(jsonRequest){

    var keys = Object.keys(jsonRequest);

    var userToUpdate = {};

    for (var idx in keys) {
        if (keys[idx] == "action")
            continue
        userToUpdate[keys[idx]] = jsonRequest[keys[idx]]
    }

    var user = ddb.put({
        TableName: 'USERS_BGG',
        Item: userToUpdate
    }).promise();

    return user;


}
/*    
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log(event);
    
        
    var bodyJSON = JSON.parse(event.body);

    "body": "{ \"userId\": \"usuario1\", \"name\": \"David\",  \"lastName\": \"Marchan\",
    \"userName\": \"usuario1\", \"password\": \"1234\", \"email\": \"1234@gmail.com\",
    \"avatar\": \"1234\", \"city\": \"Barcelona\", \"languaje\": \"ESP\",
    \"gameCollection\": \"D&D-5e\"  }"
    
    var userId = bodyJSON.userId || null;
    var name = bodyJSON.name|| null;
    var lastName = bodyJSON.lastName || null;
    var userName = bodyJSON.userName || null;
    var password = bodyJSON.password || null;
    
    
    console.log("userId", userId );
    console.log("password", password );
    console.log("name", name);
    console.log("lastName", lastName);
    console.log("userName", userName);
    
    const response = {
        "userId" : userId,
        "password" : password,
        "name" : name,
        "lastName" : lastName,
        "userName" : userName
        };

    try {
    await updateTask(userId, password, name, lastName, userName );
        return {statusCode: 200, 
                body: JSON.stringify(response)};
    } catch (err) {
        return { error: err };
    }
};

async function updateTask(userid, password, name, lastName, userName ){
  try {
    await ddb.update({
        TableName: 'USERS_BGG', 
        Key: { userId : userid, password : password},
        UpdateExpression: 'SET #state = :st, #lastName = :ass, #text = :txt',
        ExpressionAttributeNames: { '#state': 'name', '#lastName' : 'lastName', '#text' : 'userName' }, 
        ExpressionAttributeValues: {':st': name , ':ass' : lastName, ':txt' : userName},
        ReturnValues:"UPDATED_NEW"   
    }).promise();
  } catch (err) {
    return err;
  }
}
*/