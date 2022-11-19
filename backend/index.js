const AWS = require("aws-sdk");
const sns = new AWS.SNS({apiVersion: '2010-03-31'});
const dynamodb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
const tableName = process.env.COURSE_TABLE;
const topicArn = process.env.TOPIC_ARN;

exports.handler = async (event) => {
  console.log("New message from a visitor:" + JSON.stringify(event));

  const method = event.httpMethod;
  const path = event.path;
  const resource = event.resource;
  const queryParams = event.queryStringParameters;

  // const invalidReq = {
  //   statusCode: 400,
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Credentials": true
  //   },
  //   body: JSON.stringify("Invalid request")
  // };
  const getReturnObject = (statusCode, messageBody) => {
    return {
      statusCode: statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify(messageBody)
    }
  };

  if (method === "POST") {
    if (path === "/contact") {
      try {
        const body = JSON.parse(event.body);

        if (!body || !body.email
          || !body.guestname || !body.message) {
          
          console.log("Invalid request - Required params are missing.");
          
          return getReturnObject(400, { message: "Invalid request - Required params are missing." });
        }

        const { email, guestname, message, title, phone } = body;
        
        let subject = `${guestname} send a message to you on yentruong.info!`;

        const snsParams = {
          Message: JSON.stringify({
            subject: title,
            email: email,
            phone: phone,
            message: message
          }),
          Subject: subject,
          TopicArn: topicArn
        };

        const res = await sns.publish(snsParams).promise();
        
        console.log("Successfully sent email:", JSON.stringify(res));

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

        await dynamodb.putItem(saveInfo).promise();

        // return {
        //   statusCode: 200,
        //   headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Credentials": true
        //   },
        //   body: JSON.stringify({ message: "Success" })
        // };
        return getReturnObject(200, { message: "Success" });
      } catch (e) {
        const errMsg = "System error while sending SNS or saving DynamoDB";
        console.log(errMsg + ":", JSON.stringify(e));

        return getReturnObject(500, { message: errMsg });
      }
    } else {
      console.log("Invalid request - Wrong endpoint.");
      return getReturnObject(400, { message: "Invalid request - Wrong endpoint" });
    }
  } else {
    console.log("Invalid request - Wrong http method.");
    return getReturnObject(400, { message: "Invalid request - Wrong http method." });
  }
};