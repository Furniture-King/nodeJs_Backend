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
recordRoutes.route('/chaises/').get(function (req, res) {
  let db_connect = dbo.getDb('chaises');
  db_connect
    .collection('chaises')
    // .find({})
    .aggregate([{ $sort: { price: 1, title: 1, stars: 1, totalVote: 1 } }])
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
  let db_connect = dbo.getDb('chaises');
  let myobj = {
    src: req.body.src,
    title: req.body.title,
    text: req.body.text,
    bigText1: req.body.bigText1,
    bigText2: req.body.bigText2,
    price: Number(req.body.price),
    stars: Number(req.body.stars),
    totalVote: Number(req.body.totalVote),
    stock: Number(req.body.stock),
    otherSrc: [req.body.src2, req.body.src3]
  };
  // console.log(myobj);
  db_connect.collection('chaises').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you create a new canapes record.
recordRoutes.route('/canapes/add').post(function (req, response) {
  let db_connect = dbo.getDb('canapes');
  let myobj = {
    src: req.body.src,
    title: req.body.title,
    text: req.body.text,
    bigText1: req.body.bigText1,
    bigText2: req.body.bigText2,
    price: Number(req.body.price),
    stars: Number(req.body.stars),
    totalVote: Number(req.body.totalVote),
    stock: Number(req.body.stock),
    otherSrc: [req.body.src2, req.body.src3]
  };
  // console.log(myobj);
  db_connect.collection('canapes').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you create a new rangements record.
recordRoutes.route('/rangements/add').post(function (req, response) {
  let db_connect = dbo.getDb('rangements');
  let myobj = {
    src: req.body.src,
    title: req.body.title,
    text: req.body.text,
    bigText1: req.body.bigText1,
    bigText2: req.body.bigText2,
    price: Number(req.body.price),
    stars: Number(req.body.stars),
    totalVote: Number(req.body.totalVote),
    stock: Number(req.body.stock),
    otherSrc: [req.body.src2, req.body.src3]
  };
  // console.log(myobj);
  db_connect.collection('rangements').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you create a new luminaires record.
recordRoutes.route('/luminaires/add').post(function (req, response) {
  let db_connect = dbo.getDb('luminaires');
  let myobj = {
    src: req.body.src,
    title: req.body.title,
    text: req.body.text,
    bigText1: req.body.bigText1,
    bigText2: req.body.bigText2,
    price: Number(req.body.price),
    stars: Number(req.body.stars),
    totalVote: Number(req.body.totalVote),
    stock: Number(req.body.stock),
    otherSrc: [req.body.src2, req.body.src3]
  };
  // console.log(myobj);
  db_connect.collection('luminaires').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// Delete a record in chaises database
recordRoutes.route('/chaises/:id').delete((req, response) => {
  let db_connect = dbo.getDb('chaises');
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection('chaises').deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log('1 document deleted');
    response.status(obj);
  });
});

// Delete a record in canapes database
recordRoutes.route('/canapes/:id').delete((req, response) => {
  let db_connect = dbo.getDb('canapes');
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection('canapes').deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log('1 document deleted');
    response.status(obj);
  });
});

// Delete a record in luminaires database
recordRoutes.route('/luminaires/:id').delete((req, response) => {
  let db_connect = dbo.getDb('luminaires');
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection('luminaires').deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log('1 document deleted');
    response.status(obj);
  });
});

// Delete a record in rangements database
recordRoutes.route('/rangements/:id').delete((req, response) => {
  let db_connect = dbo.getDb('rangements');
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection('rangements').deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log('1 document deleted');
    response.status(obj);
  });
});

// Update a record in chaises DB by id.
recordRoutes.route('/chaises/update/:id').post(function (req, response) {
  let db_connect = dbo.getDb('chaises');
  let myquery = {
    _id: ObjectId(req.params.id)
  };

  let newvalues = {
    $set: {
      src: req.body.src,
      title: req.body.title,
      text: req.body.text,
      bigText1: req.body.bigText1,
      bigText2: req.body.bigText2,
      price: Number(req.body.price),
      stars: Number(req.body.stars),
      totalVote: Number(req.body.totalVote),
      stock: Number(req.body.stock),
      otherSrc: [req.body.src2, req.body.src3]
    }
  };
  db_connect
    .collection('chaises')
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log('1 document updated');
      response.json(res);
    });
});

// Update a record in canapes DB by id.
recordRoutes.route('/canapes/update/:id').post(function (req, response) {
  let db_connect = dbo.getDb('canapes');
  let myquery = {
    _id: ObjectId(req.params.id)
  };

  let newvalues = {
    $set: {
      src: req.body.src,
      title: req.body.title,
      text: req.body.text,
      bigText1: req.body.bigText1,
      bigText2: req.body.bigText2,
      price: Number(req.body.price),
      stars: Number(req.body.stars),
      totalVote: Number(req.body.totalVote),
      stock: Number(req.body.stock),
      otherSrc: [req.body.src2, req.body.src3]
    }
  };
  db_connect
    .collection('canapes')
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log('1 document updated');
      response.json(res);
    });
});

// Update a record in luminaires DB by id.
recordRoutes.route('/luminaires/update/:id').post(function (req, response) {
  let db_connect = dbo.getDb('luminaires');
  let myquery = {
    _id: ObjectId(req.params.id)
  };

  let newvalues = {
    $set: {
      src: req.body.src,
      title: req.body.title,
      text: req.body.text,
      bigText1: req.body.bigText1,
      bigText2: req.body.bigText2,
      price: Number(req.body.price),
      stars: Number(req.body.stars),
      totalVote: Number(req.body.totalVote),
      stock: Number(req.body.stock),
      otherSrc: [req.body.src2, req.body.src3]
    }
  };
  db_connect
    .collection('luminaires')
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log('1 document updated');
      response.json(res);
    });
});

// Update a record in rangements DB by id.
recordRoutes.route('/rangements/update/:id').post(function (req, response) {
  let db_connect = dbo.getDb('rangements');
  let myquery = {
    _id: ObjectId(req.params.id)
  };

  let newvalues = {
    $set: {
      src: req.body.src,
      title: req.body.title,
      text: req.body.text,
      bigText1: req.body.bigText1,
      bigText2: req.body.bigText2,
      price: Number(req.body.price),
      stars: Number(req.body.stars),
      totalVote: Number(req.body.totalVote),
      stock: Number(req.body.stock),
      otherSrc: [req.body.src2, req.body.src3]
    }
  };
  db_connect
    .collection('rangements')
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log('1 document updated');
      response.json(res);
    });
});

module.exports = recordRoutes;
