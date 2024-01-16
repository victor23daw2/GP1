window.onload = function () {
  var squares = document.querySelectorAll(".square");
  var dragContainer = document.querySelector(".drag");

  squares.forEach(function (square) {
    square.addEventListener("dragenter", gestionarEntradaDrag, false);
    square.addEventListener("dragleave", gestionarSalirDrag, false);
    square.addEventListener("dragover", gestionarSobreDrag, false);
    square.addEventListener("drop", gestionarDropSquare, false);
  });

  dragContainer.addEventListener("dragover", gestionarSobreDrag, false);
  dragContainer.addEventListener("drop", gestionarDropContainer, false);

  var imatges = document.querySelectorAll(".drag img");
  imatges.forEach(function (item) {
    item.addEventListener("dragstart", gestionarIniciDrag, false);
  });

  function gestionarEntradaDrag(ev) {
    ev.preventDefault();
    // Cambia el color de fondo solo si el elemento tiene la clase "square".
    if (ev.target.classList.contains("square")) {
      // Verifica en qué columna se encuentra el cuadro de destino
      var isLeftColumn = ev.target.closest(".container-left");
      // Cambia el color en consecuencia
      ev.target.style.backgroundColor = isLeftColumn ? "lightblue" : "lightcoral";
    }
  }

  function gestionarSalirDrag(ev) {
    // Restaura el color de fondo solo si el elemento tiene la clase "square".
    if (ev.target.classList.contains("square")) {
      ev.target.style.backgroundColor = "";
    }
  }

  function gestionarSobreDrag(ev) {
    ev.preventDefault();
  }

  function gestionarIniciDrag(ev) {
    ev.dataTransfer.setData("imatge", ev.target.id);
  }

  function gestionarDropSquare(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("imatge");

    // Verifica si el contenedor es un square y no tiene una imagen
    if (ev.target.classList.contains("square") && !ev.target.querySelector("img")) {
      // Mueve la imagen al contenedor
      var draggedElement = document.getElementById(data);
      ev.target.appendChild(draggedElement);

      // Mantén el color de fondo del square después de soltar la imagen
      var isLeftColumn = ev.target.closest(".container-left");
      ev.target.style.backgroundColor = isLeftColumn ? "lightblue" : "lightcoral";
    }
  }

  function gestionarDropContainer(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("imatge");

    // Mueve la imagen al contenedor .drag
    var draggedElement = document.getElementById(data);
    dragContainer.appendChild(draggedElement);

    // Restaura el color de fondo del square
    draggedElement.closest(".square").style.backgroundColor = "";
  }
};
