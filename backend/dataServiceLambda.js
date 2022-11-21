const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
const tableName = process.env.MESSAGE_TABLE;

exports.handler = async (event) => {
  console.log("Event object:", JSON.stringify(event));

  const getReturnObject = (statusCode, returnMsg) => {
    return {
      statusCode: statusCode,
      body: JSON.stringify(returnMsg)
    };
  };

  const body = JSON.parse(event.Records[0].body);
  if (!body || !body.title || !body.message
    || !body.email || !body.guestname) {
    const returnMsg = "Invalid attributes - Required attributes are missing!";
    console.log(returnMsg);

    return getReturnObject(400, { message: returnMsg });
  }

  try {
    let { title, email, phone, message, guestname } = body;
    if (!phone) phone = '';
    
    const saveInfo = {
      TableName: tableName,
      Item: {
        "title": {
          S: title
        },
        "email": {
          S: email
        },
        "phone": {
          S: phone
        },
        "message": {
          S: message
        },
        "guestname": {
          S: guestname
        }
      }
    };

    const res = await dynamodb.putItem(saveInfo).promise();
    console.log("Result of storing to DynamoDB:", JSON.stringify(res));

    return getReturnObject(200, { message: JSON.stringify(res) });
  } catch (e) { 
    const returnMsg = "System errors while storing data to DynamoDB:" + JSON.stringify(e);
    console.log(returnMsg);

    return getReturnObject(500, { message: returnMsg });
  }
};