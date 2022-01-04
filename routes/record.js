const express = require('express');

const recordRoutes = express.Router();

const dbo = require('../db/conn');

const ObjectId = require('mongodb').ObjectId;

// get a single record by id
recordRoutes.route('/chaises/:id').get(function (req, res) {
  let db_connect = dbo.getDb('chaises');
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection('chaises').findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

recordRoutes.route('/canapes/:id').get(function (req, res) {
  let db_connect = dbo.getDb('canapes');
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection('canapes').findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

recordRoutes.route('/luminaires/:id').get(function (req, res) {
  let db_connect = dbo.getDb('luminaires');
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection('luminaires').findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

recordRoutes.route('/rangements/:id').get(function (req, res) {
  let db_connect = dbo.getDb('rangements');
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection('rangements').findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// get a list of all chaises
recordRoutes.route('/chaises').get(function (req, res) {
  let db_connect = dbo.getDb('chaises');
  db_connect
    .collection('chaises')
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// get a list of all canapes
recordRoutes.route('/canapes').get(function (req, res) {
  let db_connect = dbo.getDb('canapes');
  db_connect
    .collection('canapes')
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// get a list of all rangements
recordRoutes.route('/rangements').get(function (req, res) {
  let db_connect = dbo.getDb('rangements');
  db_connect
    .collection('rangements')
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// get a list of all luminaires
recordRoutes.route('/luminaires').get(function (req, res) {
  let db_connect = dbo.getDb('luminaires');
  db_connect
    .collection('luminaires')
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new chaises record.
recordRoutes.route('/chaises/add').post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    src: req.body.furniture_src,
    title: req.body.furniture_name,
    text: req.body.furniture_text,
    bigText1: req.body.furniture_bigText1,
    bigText2: req.body.furniture_bigText2,
    price: Number(req.body.furniture_price),
    rating: Number(req.body.furniture_rating),
    totalVote: Number(req.body.furniture_totalVote),
    stock: Number(req.body.furniture_stock),
    otherSrc: [req.body.furniture_src2, req.body.furniture_src3]
  };
  // console.log(myobj);
  db_connect.collection('chaises').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you create a new canapes record.
recordRoutes.route('/canapes/add').post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    src: req.body.furniture_src,
    title: req.body.furniture_name,
    text: req.body.furniture_text,
    bigText1: req.body.furniture_bigText1,
    bigText2: req.body.furniture_bigText2,
    price: Number(req.body.furniture_price),
    rating: Number(req.body.furniture_rating),
    totalVote: Number(req.body.furniture_totalVote),
    stock: Number(req.body.furniture_stock),
    otherSrc: [req.body.furniture_src2, req.body.furniture_src3]
  };
  // console.log(myobj);
  db_connect.collection('canapes').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you create a new rangements record.
recordRoutes.route('/rangements/add').post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    src: req.body.furniture_src,
    title: req.body.furniture_name,
    text: req.body.furniture_text,
    bigText1: req.body.furniture_bigText1,
    bigText2: req.body.furniture_bigText2,
    price: Number(req.body.furniture_price),
    rating: Number(req.body.furniture_rating),
    totalVote: Number(req.body.furniture_totalVote),
    stock: Number(req.body.furniture_stock),
    otherSrc: [req.body.furniture_src2, req.body.furniture_src3]
  };
  // console.log(myobj);
  db_connect.collection('rangements').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you create a new luminaires record.
recordRoutes.route('/luminaires/add').post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    src: req.body.furniture_src,
    title: req.body.furniture_name,
    text: req.body.furniture_text,
    bigText1: req.body.furniture_bigText1,
    bigText2: req.body.furniture_bigText2,
    price: Number(req.body.furniture_price),
    rating: Number(req.body.furniture_rating),
    totalVote: Number(req.body.furniture_totalVote),
    stock: Number(req.body.furniture_stock),
    otherSrc: [req.body.furniture_src2, req.body.furniture_src3]
  };
  // console.log(myobj);
  db_connect.collection('luminaires').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

module.exports = recordRoutes;
