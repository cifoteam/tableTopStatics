/*const AWS = require('aws-sdk');
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
*/
/*    1rst version without modify
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log(event);
    
        
    var bodyJSON = JSON.parse(event.body);
    
    var userId = bodyJSON.userId || null;
    var taskStatus = bodyJSON.taskStatus|| null;
    var assignee = bodyJSON.assignee || null;
    var taskDescription = bodyJSON.taskDescription || null;
    var creationTimestamp = bodyJSON.creationTimestamp || null;
    
    
    console.log("userId", userId );
    console.log("creationTimestamp", creationTimestamp );
    console.log("taskStatus", taskStatus);
    console.log("assignee", assignee);
    console.log("taskDescription", taskDescription);
    
    const response = {
        "userId" : userId,
        "creationTimestamp" : creationTimestamp,
        "taskStatus" : taskStatus,
        "assignee" : assignee,
        "taskDescription" : taskDescription
        };

    try {
    await updateTask(userId, creationTimestamp, taskStatus, assignee, taskDescription );
        return {statusCode: 200, 
                body: JSON.stringify(response)};
    } catch (err) {
        return { error: err };
    }
};

async function updateTask(userid, creationtimestamp, taskstatus, assignee, taskdescription ){
  try {
    await ddb.update({
        TableName: 'USERS_BGG', 
        Key: { userId : userid, creationTimestamp : creationtimestamp},
        UpdateExpression: 'SET #state = :st, #assignee = :ass, #text = :txt',
        ExpressionAttributeNames: { '#state': 'taskStatus', '#assignee' : 'assignee', '#text' : 'taskDescription' }, 
        ExpressionAttributeValues: {':st': taskstatus , ':ass' : assignee, ':txt' : taskdescription},
        ReturnValues:"UPDATED_NEW"   
    }).promise();
  } catch (err) {
    return err;
  }
}
*/

 /*
    my input example
    "body": "{ \"userId\": \"usuario1\", \"name\": \"David\",  \"lastName\": \"Marchan\",
    \"userName\": \"usuario1\", \"password\": \"1234\", \"email\": \"1234@gmail.com\",
    \"avatar\": \"1234\", \"city\": \"Barcelona\", \"languaje\": \"ESP\",
    \"gameCollection\": \"D&D-5e\"  }"
*/

const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log(event);
    
        
    var bodyJSON = JSON.parse(event.body);
    
    var userId = bodyJSON.userId || null;
    var name = bodyJSON.name|| null;
    var lastName = bodyJSON.lastName || null;
    var userName = bodyJSON.userName || null;
    var password = bodyJSON.password || null;
    var email = bodyJSON.email || null ;
    var avatar = bodyJSON.avatar || null ;
    var city = bodyJSON.city || null ;
    var languaje = bodyJSON.languaje || null ;
    var gameCollection = bodyJSON.gameCollection || null ;
    /*
    console.log("userId", userId );
    console.log("creationTimestamp", creationTimestamp );
    console.log("taskStatus", taskStatus);
    console.log("assignee", assignee);
    console.log("taskDescription", taskDescription);
    */
    const response = {
        "userId" : userId,
        "name" : name,
        "lastName" : lastName,
        "userName" : userName,
        "password" : password,
        "email" : email,
        "avatar" : avatar,
        "city" : city,
        "languaje" : languaje,
        "gameCollection" : gameCollection

        };

    try {
    await updateTask(userId, name, lastName, userName, password, email, avatar, city, languaje, gameCollection);
        return {statusCode: 200, 
                body: JSON.stringify(response)};
    } catch (err) {
        return { error: err };
    }
};

async function updateTask(userId, name, lastName, userName, password, email, avatar, city, languaje, gameCollection){
  try {
    await ddb.update({
        TableName: 'USERS_BGG', 
        Key: { userId : userId},
        UpdateExpression: 'SET #name = :name, #lastName = :lastName, #userName = :userName, #password = :password, #email = :email, #avatar = :avatar, #city = :city, #languaje = :languaje, #gameCollection = :gameCollection',
        ExpressionAttributeNames: {'#name' : 'name', '#lastName' : 'lastName', '#userName' : 'userName', '#password' : 'password', '#email' : 'email', '#avatar' : 'avatar', '#city' : 'city', '#languaje' : 'languaje', '#gameCollection' : 'gameCollection'},
        ExpressionAttributeValues: {':name': name, ':lastName': lastName, ':userName' : userName, ':password':password, ':email': email, ':avatar' : avatar, ':city': city, ':languaje': languaje, ':gameCollection': gameCollection},
        ReturnValues:"UPDATED_NEW"  
    }).promise();
  } catch (err) {
    return err;
  }
}