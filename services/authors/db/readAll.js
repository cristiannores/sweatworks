'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event, callback) => {
    const params = {
        TableName: process.env.ENVIRONMENT + '-authors',
    };
    console.log('Table Author List ALL');

    return dynamoDb.scan(params, (error, data) => {
        if (error) {
            callback(error);
        }

        console.log('Table Author List ALL error',error);
        console.log('Table Author List ALL data',data);
        callback(error, data.Items);
    });
};
