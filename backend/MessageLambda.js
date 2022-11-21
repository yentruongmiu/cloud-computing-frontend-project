const AWS = require("aws-sdk");
const sns = new AWS.SNS({ apiVersion: '2010-03-31' });
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

const topicArn = process.env.TOPIC_ARN;
const sqsUrl = process.env.STANDARDSQS_URL;

exports.handler = async (event) => {
  console.log("New message from a visitor:" + JSON.stringify(event));

  const method = event.httpMethod;
  const path = event.path;

  const getReturnObject = (statusCode, returnMsg) => {
    return {
      statusCode: statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify(returnMsg)
    }
  };

  if (method === "POST") {
    if (path === "/contact") {
      try {
        const body = JSON.parse(event.body);

        if (!body || !body.email || !body.title
          || !body.guestname || !body.message) {
          const returnMsg = "Invalid request - Required params are missing.";
          console.log(returnMsg);
          
          return getReturnObject(400, { message: returnMsg });
        }

        const { email, guestname, message, title, phone } = body;
        
        const subject = `${guestname} send a message to you on yentruong.net!`;

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

        const resSNS = await sns.publish(snsParams).promise();
        
        console.log("Successfully sent email:", JSON.stringify(resSNS));

        //sendMessage to SQS
        const sqsParams = {
          MessageBody: JSON.stringify({
            title: title,
            message: message,
            email: email,
            phone: phone,
            guestname: guestname
          }),
          QueueUrl: sqsUrl
        };
        
        const resSQS = await sqs.sendMessage(sqsParams).promise();

        console.log("Successfully sent message to StandardQueue SQS", JSON.stringify(resSQS));

        return getReturnObject(200, { message: "Success" });
      } catch (e) {
        const errMsg = "System error while sending SNS or sending message to SQS";
        console.log(errMsg + ":", JSON.stringify(e));

        return getReturnObject(500, { message: errMsg });
      }
    } else {
      const returnMsg = "Invalid request - Wrong endpoint.";
      console.log(returnMsg);
      return getReturnObject(400, { message: returnMsg });
    }
  } else {
    const returnMsg = "Invalid request - Wrong http method.";
    console.log(returnMsg);
    return getReturnObject(400, { message: returnMsg });
  }
};