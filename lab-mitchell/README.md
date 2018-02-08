# Lab 13 ~ Single Resource Mongo and Express API

**Author**: Mitchell
**Version**: 1.0.0

## Overview
This lab is focused on utilizing the MongoDB database, and the Mongoose NPM package to create `Schema`'s that store a particular 'class' of information in MongoDB. We need to use the `body-parser` express middleware to parse the `request` body of `PUT` and `POST` requests. We also need to use `express` `Router` for restful CRUD operations with respect to the chosen model.

## Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next,run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired. Using Postman, or HTTPie (which was used to test these routes), you can send GET/POST/PUT/DELETE requests to the application to test out the responses. 

## Description
**Server** 
This file `server.js` in the `lib/` directory utilizes `cors`, `express`, `mongoose`, and `debug` dependencies. It also requires in the `errorHandler` custom middleware. It exports a `server` object to use elsewhere in the application. There are two functions attached to this object, `server.start()` and `server.stop()`, to be used in the `index.js` entry point as well as test files.

**Route**
The `route/` directory contains a single file, `route-animal.js`, which exports a single anonymous function expecting a single `router` argument. The exported file has CRUD methods mounted on the router to the `/animal/:_id?` endpoint. `POST` and `PUT` incorporate the `body-parser` middleware for the purposes described above.

**Model**
The `model/` directory contains a single `Schema`, `animal.js`, which exports a `mongoose` model to store in the DB. It has `name`, `isMammal` and `legs` properties which are all required, and values are expected to be in the form of string, boolean, and number respectively.

**Error-handler**
This file `error-handler.js` in the `lib/` directory exports a single anonymous function expecting two arguments, `err` and `res`. It has a number of switch cases, which respond with different status codes depending on the text of the error message they receive. 

## Credits and Collaborations
[Body Parser Docs](https://www.npmjs.com/package/body-parser) ~ https://www.npmjs.com/package/body-parser
[Cors Docs]() ~ 
[Dotenv Docs](https://www.npmjs.com/package/dotenv) ~ https://www.npmjs.com/package/dotenv
[Debug Docs]() ~ 
[ESLint Docs]() ~ 
[Express Docs](http://expressjs.com/en/4x/api.html) ~ http://expressjs.com/en/4x/api.html
[Jest Docs](https://facebook.github.io/jest/) ~ https://facebook.github.io/jest/
[MongoDB]() ~ 
[Mongoose Docs]() ~ 
