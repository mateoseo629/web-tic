document.addEventListener("DOMContentLoaded", () => {

  console.log("✅ JavaScript cargado correctamente");

  /* ===== 1. Cambio de imágenes al hacer clic ===== */
  let imagenActual = 1;
  const imagen = document.getElementById("imagenInteractiva");

  if (imagen) {
    imagen.addEventListener("click", () => {
      imagenActual = imagenActual === 1 ? 2 : 1;
      imagen.src = `images/img${imagenActual}.jpg`;
    });
  }

  /* ===== 2. Campo de texto interactivo ===== */
  const input = document.getElementById("textoUsuario");
  const textoResultado = document.getElementById("resultadoTexto");

  if (input && textoResultado) {
    input.addEventListener("input", () => {
      if (input.value.trim() !== "") {
        textoResultado.innerText = "Has escrito: " + input.value;
      } else {
        textoResultado.innerText = "El texto cambiará cuando escribas.";
      }
    });
  }

  /* ===== 3. Objeto en movimiento ===== */
  const objeto = document.getElementById("planeta");
  let posX = 0;
  let velocidad = 2;

  function moverObjeto() {
    if (!objeto) return;

    posX += velocidad;

    if (posX > 300 || posX < 0) {
      velocidad = -velocidad;
    }

    objeto.style.left = posX + "px";
    requestAnimationFrame(moverObjeto);
  }

  moverObjeto();

});
