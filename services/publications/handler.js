'use strict';

const Create = require('./db/create.js');
const ReadAll = require('./db/readAll');
const ReadOne = require('./db/readOne');
const Update = require('./db/update');
const Delete = require('./db/delete');
const FindByAuthor = require('./db/findByAuthor');


module.exports.create = (event, context, callback) => {
  Create(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result),
    };
    console.log('Send response', response);

    context.succeed(response);
  });
};
module.exports.readAll = (event, context, callback) => {
  ReadAll(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result),
    };
    console.log('Send response', response);
    context.succeed(response);
  });
};
module.exports.readOne = (event, context, callback) => {
  ReadOne(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};
module.exports.update = (event, context, callback) => {
  Update(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};
module.exports.delete = (event, context, callback) => {
  Delete(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.findByAuthor = (event, context, callback) => {



  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.ENVIRONMENT + '-publications',
    IndexName: 'userId-index',
    FilterExpression: 'userId = :a',
    ExpressionAttributeValues: {
      ':a': data.userId
    },
  };

  if (data.title) {
    params.FilterExpression = params.FilterExpression + '  and contains(title, :t)';
    params.ExpressionAttributeValues[':t'] = data.title;
  }

   

  if (data.LastEvaluatedKey) {
    params.ExclusiveStartKey = data.LastEvaluatedKey;
  }

  FindByAuthor(params, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result),
    };
    context.succeed(response);
  }, data.pagination, data.order);




}