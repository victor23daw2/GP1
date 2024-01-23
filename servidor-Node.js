const MongoClient = require("mongodb").MongoClient;
const querystring = require("node:querystring");
const assert = require("assert");
const port = 8888;

let http = require("http");
let fs = require("fs");

function iniciarNode() {
  function onRequest(req, res) {
    const baseURL = req.protocol + "://" + req.headers.host + "/";
    const reqUrl = new URL(req.url, baseURL);
    console.log("Petició per a  " + reqUrl.pathname + " rebuda.");

    if (reqUrl.pathname == "/") {
      // fs.readFile is to read a file.
      fs.readFile("./index.html", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "text/html; charset=utf-8",
        });

        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/index.html") {
      fs.readFile("./index.html", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "text/html; charset=utf-8",
        });

        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/nosotros.html") {
      fs.readFile("./nosotros.html", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "text/html; charset=utf-8",
        });

        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/contacto.html") {
      fs.readFile("./contacto.html", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "text/html; charset=utf-8",
        });

        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/kids.html") {
      fs.readFile("./kids.html", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "text/html; charset=utf-8",
        });

        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/drag_and_drop.html") {
      fs.readFile("./drag_and_drop.html", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "text/html; charset=utf-8",
        });

        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/login.html") {
      fs.readFile("./login.html", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "text/html; charset=utf-8",
        });

        console.log(sortida);
        res.write(sortida);
        res.end();
      });

      let requestBody = "";
      req.on("data", function (data) {
        requestBody += data;
      });

      req.on("end", function () {
        // querystring.parse(requestBody) is to get the data from the form and split it on diffent parts in a json format.
        let formData = querystring.parse(requestBody);
        // console.log(formData);

        MongoClient.connect(
          "mongodb://localhost:27017/projecteDAW2",
          function (err, client) {
            assert.equal(null, err);
            console.log("Connected to MongoDB successfully");

            const db = client.db("projecteDAW2");

            // Check if user with entered credentials exists, this part has been done with the help of ChatGPT.
            db.collection("usuaris")
              .findOne({
                email: formData.email,
                password: formData.password,
              })
              .then((user) => {
                if (user) {
                  // User exists, perform login logic
                  console.log("Connexio correcta amb MongoDB.");
                  res.end();
                } else {
                  // User not found, handle accordingly (e.g., redirect to login page)
                  console.log("Credencials incorrectes.");
                  res.end();
                }
              })
              .catch((error) => {
                console.error("Error:", error);
                res.end();
              })
              .finally(() => {
                client.close();
              });
          }
        );
      });
    } else if (reqUrl.pathname == "/JS/drag_and_drop.js") {
      fs.readFile("./JS/drag_and_drop.js", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "text/javascript; charset=utf-8",
        });

        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/JS/canvas.js") {
      fs.readFile("./JS/canvas.js", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "text/javascript; charset=utf-8",
        });

        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/JS/login.js") {
      fs.readFile("./JS/login.js", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "text/javascript; charset=utf-8",
        });

        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname === "/Assets/CSS/style.css") {
      fs.readFile("./Assets/CSS/style.css", "utf8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/text" });
          res.end("Error llegint fitxer");
        } else {
          res.writeHead(200, { "Content-Type": "text/css" });
          res.end(data);
        }
      });
    } else if (reqUrl.pathname === "/Assets/CSS/dragAndDrop.css") {
      fs.readFile("./Assets/CSS/dragAndDrop.css", "utf8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/text" });
          res.end("Error llegint fitxer");
        } else {
          res.writeHead(200, { "Content-Type": "text/css" });
          res.end(data);
        }
      });
    } else if (reqUrl.pathname == "/Assets/Images/gota.png") {
      fs.readFile("./Assets/Images/gota.png", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "image/png; charset=utf-8",
        });

        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/Assets/Images/grifo.jpg") {
      fs.readFile("./Assets/Images/grifo.jpg", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "image/jpg; charset=utf-8",
        });

        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/Assets/Images/logo.png") {
      fs.readFile("./Assets/Images/logo.png", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "image/png; charset=utf-8",
        });

        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/Assets/Images/regar.png") {
      fs.readFile("./Assets/Images/regar.png", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "image/png; charset=utf-8",
        });

        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/Assets/Images/sequia.png") {
      fs.readFile("./Assets/Images/sequia.png", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "image/png; charset=utf-8",
        });

        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/Assets/Images/lluvia.png") {
      fs.readFile("./Assets/Images/lluvia.png", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "image/png; charset=utf-8",
        });

        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/Assets/Images/rio.png") {
      fs.readFile("./Assets/Images/rio.png", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "image/png; charset=utf-8",
        });

        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/Assets/Images/nivel_mar.png") {
      fs.readFile("./Assets/Images/nivel_mar.png", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "image/png; charset=utf-8",
        });

        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/Assets/Images/logo.png") {
      fs.readFile("./Assets/Images/logo.png", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "image/png; charset=utf-8",
        });

        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/Assets/Images/lago.png") {
      fs.readFile("./Assets/Images/lago.png", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "image/png; charset=utf-8",
        });

        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/Assets/Images/reservas_agua.png") {
      fs.readFile("./Assets/Images/reservas_agua.png", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "image/png; charset=utf-8",
        });

        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/Assets/Images/noticia1.jpeg") {
      fs.readFile("./Assets/Images/noticia1.jpeg", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "image/jpeg; charset=utf-8",
        });

        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/Assets/Images/noticia2.jpeg") {
      fs.readFile("./Assets/Images/noticia2.jpeg", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "image/jpeg; charset=utf-8",
        });

        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/Assets/Audio/gota.mp3") {
      fs.readFile("./Assets/Audio/gota.mp3", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "audio/mp3; charset=utf-8",
        });

        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/Assets/Video/sequia.mp4") {
      fs.readFile("./Assets/Video/sequia.mp4", function (err, sortida) {
        res.writeHead(200, {
          "Content-Type": "video/mp4; charset=utf-8",
        });
        res.write(sortida);
        res.end();
      });
    } else {
      // If I don't ask for any of the pages that were before, I send "Not found".
      res.writeHead(404, {
        "Content-Type": "text/html; charset=utf-8",
      });
      res.write("Not found");
      res.end();
    }
  }

  http.createServer(onRequest).listen(port);
  console.log(`Servidor node iniciat a http://localhost:${port}.`);
}

exports.iniciarNode = iniciarNode;
