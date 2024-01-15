window.onload = function () {
    var elements = document.querySelectorAll(".square, .drag");
  
    [].forEach.call(elements, function (item) {
      item.addEventListener("dragenter", gestionarEntradaDrag, false);
      item.addEventListener("dragleave", gestionarSalirDrag, false);
      item.addEventListener("dragover", gestionarSobreDrag, false);
      item.addEventListener("drop", gestionarDrop, false);
    });
  
    var imatges = document.querySelectorAll(".drag img");
    [].forEach.call(imatges, function (item) {
      item.addEventListener("dragstart", gestionarIniciDrag, false);
    });
  
    function gestionarEntradaDrag(ev) {
      // Cambia el color de fondo solo si el elemento tiene la clase "square".
      if (ev.target.classList.contains("square")) {
        ev.target.style.backgroundColor = "lightblue";
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
  
    function gestionarDrop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("imatge");
  
      // Verifica si el contenedor es un square y no tiene una imagen
      if (ev.target.classList.contains("square") && !ev.target.querySelector("img")) {
        // Mueve la imagen al contenedor
        var draggedElement = document.getElementById(data);
        ev.target.appendChild(draggedElement);
  
        // Restaura el color de fondo del square
        ev.target.style.backgroundColor = "lightblue";
      } else if (ev.target.classList.contains("drag")) {
        // Si el contenedor es .drag, simplemente agrega la imagen al contenedor
        var draggedElement = document.getElementById(data);
        ev.target.appendChild(draggedElement);
      }
    }
  };
  