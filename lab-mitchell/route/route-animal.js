'use strict';

const Animal = require('../model/animal');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');
const debug = require('debug')('http:route-animal.js');

module.exports = function (router) {
  router.route('/animal/:_id?')
    .get((req, res) => {
      debug(`${req.method}: ${req.url}`);
      if (req.params._id) { //if a specific ID being request, since no way to make 2 different GET requests with this pattern
        Animal.findById(req.params._id)
          .then(animal => res.status(200).json(animal)) //.json sets content to application/json then stringifies the raw object
          .catch(err => errorHandler(err, res));
      }

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
        .then(() => res.sendStatus(204))
        .catch(err => errorHandler(err, res));
    })

    .delete((req, res) => {
      debug(`${req.method}: ${req.url}`);
      Animal.findByIdAndRemove(req.params._id)
        .then(() => res.sendStatus(204))
        .catch(err => errorHandler(err, res));
    });
};
