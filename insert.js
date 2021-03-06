"use strict"

var MongoClient = require("mongodb").MongoClient

MongoClient.connect(
  "mongodb://127.0.0.1:27017/accountings",
  function (err, connection) {
    var collection = connection.collection("customers")

    var doInsert = function (i) {
      if (i < 200000) {
        var value = Math.floor(Math.random() * 10)
        collection.insert({ n: "#" + i, v: value }, function (err, count) {
          doInsert(i + 1)
        })
      } else {
        connection.close()
      }
    }
    doInsert(0)
  }
)
