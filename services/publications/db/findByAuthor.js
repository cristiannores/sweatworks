'use strict';

// Load the full build.
var _ = require('lodash');

const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();


var resultSet = { Items: [], LastEvaluatedKey: {}, count: 0, scanned: 0 };


function scan(params, callback, pagination, order) {

    db.scan(params, (error, data) => {

        if (error) {

            callback(error);

        }

        if (data.Items[0] !== null && data.Items[0] && data && data.Items) {

            data.Items.forEach(item => {
                resultSet.Items.push(item);
            });

        }

        if (data.LastEvaluatedKey && resultSet.Items.length < params.Limit) {

            params.ExclusiveStartKey = data.LastEvaluatedKey;
            resultSet.LastEvaluatedKey = (data.LastEvaluatedKey) ? data.LastEvaluatedKey : {};

            scan(params, callback, {});

        } else {

            var Items = resultSet.Items;

            if (order === "last_created") {
                Items = _.sortBy(Items, function (dateObj) {
                    return new Date(dateObj.createdAt * 1000);
                }).reverse();
            }



            var ini = (pagination.page - 1) * pagination.limit;
            var end = ini + pagination.limit;
            resultSet.Items = Items.slice(ini, end);
            resultSet.count = data.Count;

            callback(error, resultSet);

        }
    });

}

module.exports = (params, callback, pagination, order) => {

    resultSet = { Items: [], LastEvaluatedKey: {} };

    scan(params, (error, res) => {
        callback(error, res);
    }, pagination, order);

}


