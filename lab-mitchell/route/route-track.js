'use strict';

const Track = require('../model/track');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');
const debug = require('debug')('http:route-track.js');

module.exports = function(router) {
  router.route('/track/:_id?') //track and optional id
  //chaining these request methods to router so that them and all their callbacks have access to/are accessable to/from the route with the '/track/:_id?' endpoint
    .get((req, res) => {
      debug(`${req.method}: ${req.url}`);

      //if theres an ID, i.e. a specific record being requested
      if(req.params._id) { 
        Track.findById(req.params._id)
          .then(track => res.status(200).json(track)) //.json sets content to application/json then stringifies the raw object
          .catch(err => errorHandler(err, res));
      }
      
      //otherwise, with no specifc ID, get all the things
      //complete getAll

    })
    .post(bodyParser, (req, res) => {
      debug(`${req.method}: ${req.url}`);
      
      new Track(req.body).save() //creates new instance by passing in body of request, then saves it, will be validated that required key values exist and values are of right types
      //immediately save things to mongoDB, replaces the storage.create() method from last few labs
      //gives entire record with id, without any properties you did not pass, just title/arist/_id in this case
        .then(track => res.status(201).json(track))
        .catch(err => errorHandler(err, res));
    })
    //complete PUT
    .put(bodyParser, (req, res) => {
      debug(`${req.method}: ${req.url}`);


    })
    // complete delete
    .delete((req, res) => {
      debug(`${req.method}: ${req.url}`);

    });
};

