document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.getElementById('div-ir-arriba');
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollToTopButton.style.display = 'flex';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    });
  
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  
  
  const proyectos = [
    { titulo: "PROYECTO MOVIL",  imagen: "android_carrito.jpg" },
    { titulo: "PROYECTO MOVIL", imagen: "android_inicio.jpg" },
    { titulo: "PROYECTO MOVIL", imagen: "android_libreria.jpg" },
    { titulo: "PROYECTO MOVIL", imagen: "android_menu.jpg" },
    { titulo: "PROYECTO MOVIL",  imagen: "android_satelite.jpg" },
    { titulo: "PROYECTO WEB", imagen: "brisa_carrito.jpg" },
    { titulo: "PROYECTO WEB", imagen: "brisa_produc.jpg" },
    { titulo: "PROYECTO WEB",  imagen: "brisa.jpg" },
    { titulo: "PROYECTO WEB", imagen: "digital_form.jpg" },
    { titulo: "PROYECTO WEB", imagen: "digital.jpg" },
  
];

const proyectosLista = document.getElementById("proyectos_lista");
const imagenCompleta = document.getElementById("imagen-completa");
const imagenAmpliada = document.getElementById("imagen-ampliada");
const cerrarImagen = document.getElementById("cerrar-imagen");
const header = document.getElementById("header_page");

proyectos.forEach(proyecto => {
    const listItem = document.createElement("li");
    const imagen = document.createElement("img");
    listItem.innerHTML = `
        <div class="proyecto-info">
            <h2 class="proyecto-titulo">${proyecto.titulo}</h2>
        </div>
    `;
    imagen.src = `./IMG/Proyectos/${proyecto.imagen}`;
    imagen.alt = proyecto.titulo;
    imagen.className = "proyecto-imagen";
    listItem.appendChild(imagen);
    proyectosLista.appendChild(listItem);

    // Agregar evento clic para mostrar la imagen a pantalla completa
    imagen.addEventListener("click", () => {
        imagenAmpliada.src = imagen.src;
        imagenCompleta.style.display = "block";
        header.style.display="none"

    });
});

// Agregar evento clic para cerrar la imagen a pantalla completa
cerrarImagen.addEventListener("click", () => {
    imagenCompleta.style.display = "none";
    header.style.display="flex";
});