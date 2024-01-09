let http = require("http");
let fs = require("fs");

function iniciar() {
  function onRequest(req, res) {
    const baseURL = req.protocol + "://" + req.headers.host + "/";
    const reqUrl = new URL(req.url, baseURL);
    console.log("Petició per a  " + reqUrl.pathname + " rebuda.");

    if (reqUrl.pathname == "/") {
      // If I ask /.

      // fs.readFile is to read pagina.html.
      fs.readFile("./index.html", function (err, sortida) {
        res.writeHead(200, {
          // As I return an html, the MIME must be "text/html".
          "Content-Type": "text/html; charset=utf-8",
        });

        // productes.push(document.getElementById("seleccioProducte"));
        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/index.html") {
      // If I ask /.

      // fs.readFile is to read pagina.html.
      fs.readFile("./index.html", function (err, sortida) {
        res.writeHead(200, {
          // As I return an html, the MIME must be "text/html".
          "Content-Type": "text/html; charset=utf-8",
        });

        // productes.push(document.getElementById("seleccioProducte"));
        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/nosotros.html") {
      // If I ask /.

      // fs.readFile is to read pagina.html.
      fs.readFile("./nosotros.html", function (err, sortida) {
        res.writeHead(200, {
          // As I return an html, the MIME must be "text/html".
          "Content-Type": "text/html; charset=utf-8",
        });

        // productes.push(document.getElementById("seleccioProducte"));
        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/contacto.html") {
      // If I ask /.

      // fs.readFile is to read pagina.html.
      fs.readFile("./contacto.html", function (err, sortida) {
        res.writeHead(200, {
          // As I return an html, the MIME must be "text/html".
          "Content-Type": "text/html; charset=utf-8",
        });

        // productes.push(document.getElementById("seleccioProducte"));
        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/kids.html") {
      // If I ask /.

      // fs.readFile is to read pagina.html.
      fs.readFile("./kids.html", function (err, sortida) {
        res.writeHead(200, {
          // As I return an html, the MIME must be "text/html".
          "Content-Type": "text/html; charset=utf-8",
        });

        // productes.push(document.getElementById("seleccioProducte"));
        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/login.html") {
      // If I ask /.

      // fs.readFile is to read pagina.html.
      fs.readFile("./login.html", function (err, sortida) {
        res.writeHead(200, {
          // As I return an html, the MIME must be "text/html".
          "Content-Type": "text/html; charset=utf-8",
        });

        // productes.push(document.getElementById("seleccioProducte"));
        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname === "/CSS/style.css") {
      fs.readFile("./CSS/style.css", "utf8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/text" });
          res.end("Error llegint fitxer");
        } else {
          res.writeHead(200, { "Content-Type": "text/css" });
          res.end(data);
        }
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

  http.createServer(onRequest).listen(8888);
  console.log("Servidor iniciat.");
}

exports.iniciar = iniciar;
