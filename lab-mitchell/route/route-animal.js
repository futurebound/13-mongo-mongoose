'use strict';

const Animal = require('../model/animal');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');
const debug = require('debug')('http:route-animal.js');

module.exports = function (router) {
  router.route('/animal/:_id?')
    .get((req, res) => {
      debug(`${req.method}: ${req.url}`);
      //if theres an ID, i.e. a specific record being requested
      if (req.params._id) {
        Animal.findById(req.params._id)
          .then(animal => res.status(200).json(animal)) //.json sets content to application/json then stringifies the raw object
          .catch(err => errorHandler(err, res));
      }

      //otherwise, with no specifc ID, get all the things
      //complete getAll
      debug(`${Animal.find('animal')}`);
      Animal.find(Animal)
        .then(animal => res.status(200).json(animal))
        .catch(err => errorHandler(err, res));
    })
    .post(bodyParser, (req, res) => {
      debug(`${req.method}: ${req.url}`);

      new Animal(req.body).save()
        .then(animal => res.status(201).json(animal))
        .catch(err => errorHandler(err, res));
    })
    .put(bodyParser, (req, res) => {
      debug(`${req.method}: ${req.url}`);
      debug(`${req.body}`);

      Animal.findByIdAndUpdate(req.params._id, req.body)
        .then(res => debug(`${res}`))
        // .then(animal => .save(animal))
        .then(() => res.sendStatus(204))
        .catch(err => errorHandler(err, res));

        // .then(buffer => buffer.toString())
        // .then(json => JSON.parse(json)) //to get it into a JS object
        // .then(student => ({
        //   //the way this is structure, ||, allows for updating one or the other not both at the same time
        //   _id: req.params._id,
        //   name: req.body.name || student.name, //ensure can send complete or part thing and will update anyways with the ||
        //   city: req.body.city || student.city,
        // })) //parens around {} in arrow function, returning object literal not creating a code block
        // .then(student => JSON.stringify(student))
        // .then(json => storage.update('student', req.params._id, json))
        // .then(() => res.sendStatus(204))
        // .catch(err => errorHandler(err, res));
    })
    // complete delete
    .delete((req, res) => {
      debug(`${req.method}: ${req.url}`);
      Animal.findByIdAndRemove(req.params._id)
        .then(() => res.sendStatus(204))
        .catch(err => errorHandler(err, res));
    });
};
