'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports = (event, callback) => {
  const data = JSON.parse(event.body);


  data.id = uuid.v1();
  
  data.createdAt = new Date().getTime();

  const params = {
    TableName: process.env.ENVIRONMENT + '-publications',
    Item: data
  };

  return dynamoDb.put(params, (error, data) => {
    if (error) {
      callback(error);
    }
    callback(error, params.Item);
  });
};