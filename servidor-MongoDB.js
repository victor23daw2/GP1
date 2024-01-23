// https://www.youtube.com/watch?v=ZhqOp1Dkuso

let MongoClient = require("mongodb").MongoClient;
let assert = require("assert"); //utilitzem assercions

function iniciarMongo() {
  let ruta = "mongodb://localhost:27017/projecteDAW2";

  MongoClient.connect(ruta, function (err, client) {
    assert.equal(null, err);
    console.log("Connexió correcta");
    let db = client.db("projecteDAW2"); // Here I say the database that I'll use.

    // This function adds different users.
    afegirClients(db, err, function () {});

    // This function shows the information of the user with sergi as name.
    // consultarDocument(db, err, function () {});

    // This function deletes all of the users of the database.
    // esborrarTotsDocuments(db, err, function () {
    //   client.close();
    // });

    // db.close();
  });
}

let afegirClients = function (db, err, callback) {
  db.collection("usuaris").insertOne({
    nom: "Peta",
    cognom: "Zetta",
    edat: 25,
    correu: "petazetta123@proton.me",
    telf: "123-567-890",
    tipus: "client",
  });

  db.collection("usuaris").insertOne({
    nom: "Pedro",
    cognom: "Picapiedra",
    edat: 54,
    correu: "pedroelpicapiedra@gmail.com",
    telf: "456-123-970",
    tipus: "client",
  });

  db.collection("usuaris").insertOne({
    nom: "Ramon",
    cognom: "Carbon",
    edat: 45,
    correu: "ramoncarbon@gmail.com",
    telf: "915-432-760",
    tipus: "client",
  });

  assert.equal(err, null);
  console.log("Creant diversos clients a col·lecció usuaris");
  callback();
};

let consultarDocument = function (db, err, callback) {
  let cursor = db.collection("usuaris").find({
    nom: "Pedro", // Here I search for the user that has the name "sergi".
  });

  cursor.toArray(function (err, results) {
    assert.equal(err, null);

    if (results != null) {
      results.forEach((doc) => {
        console.log(`Usuari: ${doc.nom}, correu: ${doc.correu}`);
      });
    } else {
      callback();
    }
  });
};

let esborrarTotsDocuments = function (db, err, callback) {
  console.log(`Esborrant tots els usuaris de la base de dades.`);

  db.collection("usuaris").deleteMany({}, function (err, results) {
    //console.log(results);
    callback();
  });
};

exports.iniciarMongo = iniciarMongo;
