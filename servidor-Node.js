let http = require("http");
let fs = require("fs");
const port = 8888;

function iniciarNode() {
  function onRequest(req, res) {
    const baseURL = req.protocol + "://" + req.headers.host + "/";
    const reqUrl = new URL(req.url, baseURL);
    console.log("Petició per a  " + reqUrl.pathname + " rebuda.");

    if (reqUrl.pathname == "/") {
      // If I ask /.
      // fs.readFile is to read a file.
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
    } else if (reqUrl.pathname == "/drag_and_drop.html") {
      // fs.readFile is to read pagina.html.
      fs.readFile("./drag_and_drop.html", function (err, sortida) {
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
    } else if (reqUrl.pathname == "/JS/drag_and_drop.js") {
      // fs.readFile is to read pagina.html.
      fs.readFile("./JS/drag_and_drop.js", function (err, sortida) {
        res.writeHead(200, {
          // As I return an html, the MIME must be "text/html".
          "Content-Type": "text/javascript; charset=utf-8",
        });

        // productes.push(document.getElementById("seleccioProducte"));
        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/JS/canvas.js") {
      // fs.readFile is to read pagina.html.
      fs.readFile("./JS/canvas.js", function (err, sortida) {
        res.writeHead(200, {
          // As I return an html, the MIME must be "text/html".
          "Content-Type": "text/javascript; charset=utf-8",
        });

        // productes.push(document.getElementById("seleccioProducte"));
        console.log(sortida);
        res.write(sortida);
        res.end();
      });
    } else if (reqUrl.pathname == "/JS/login.js") {
      // fs.readFile is to read pagina.html.
      fs.readFile("./JS/login.js", function (err, sortida) {
        res.writeHead(200, {
          // As I return an html, the MIME must be "text/html".
          "Content-Type": "text/javascript; charset=utf-8",
        });

        // productes.push(document.getElementById("seleccioProducte"));
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
