document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formLead");

  if (form) {
    form.addEventListener("submit", function(e) {
      const hp = document.getElementById("telefono2").value;

      if (hp !== "") {
        // Es un bot, prevenir envío
        e.preventDefault();
        console.log("Bot detectado 🚫");
        return;
      }

      // Evento para Google Analytics (opcional pero recomendado)
      if (typeof gtag === "function") {
        gtag('event', 'form_submit', {
          event_category: 'Formulario',
          event_label: 'Lead'
        });
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("carouselTrack");
    const btnNext = document.getElementById("btnNext");
    const btnPrev = document.getElementById("btnPrev");

    function moveNext() {
        // Obtenemos el ancho exacto del contenedor en ese momento
        const width = track.getBoundingClientRect().width;
        
        track.style.transition = "transform 0.6s ease-in-out";
        track.style.transform = `translateX(-${width}px)`; // Usamos px exactos en lugar de %

        setTimeout(() => {
            track.style.transition = "none";
            track.appendChild(track.firstElementChild); // Movemos al final
            track.style.transform = "translateX(0)";
        }, 600);
    }

    function movePrev() {
        const width = track.getBoundingClientRect().width;

        track.style.transition = "none";
        track.prepend(track.lastElementChild); // Movemos al inicio
        track.style.transform = `translateX(-${width}px)`;

        // Forzamos un "reflow" para que el navegador registre el cambio de posición
        track.offsetHeight; 

        setTimeout(() => {
            track.style.transition = "transform 0.6s ease-in-out";
            track.style.transform = "translateX(0)";
        }, 10);
    }

    btnNext.addEventListener("click", () => {
        moveNext();
        resetAutoPlay();
    });

    btnPrev.addEventListener("click", () => {
        movePrev();
        resetAutoPlay();
    });

    let autoPlay = setInterval(moveNext, 5000);

    function resetAutoPlay() {
        clearInterval(autoPlay);
        autoPlay = setInterval(moveNext, 5000);
    }
});

const form = document.getElementById("formExperiencia");
const lista = document.getElementById("listaComentarios");

// cargar comentarios guardados (opcional)
let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

function mostrarComentarios() {
  lista.innerHTML = "";

  comentarios.slice(-5).reverse().forEach(c => {
    const div = document.createElement("div");
    div.classList.add("testimonio");

    div.innerHTML = `
      <p>"${c.texto}"</p>
      <span>${c.estrellas} - ${c.nombre}</span>
    `;

    lista.appendChild(div);
  });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = this.querySelector("input").value;
  const texto = this.querySelector("textarea").value;
  const estrellas = this.querySelector("select").value;

  comentarios.push({ nombre, texto, estrellas });

  localStorage.setItem("comentarios", JSON.stringify(comentarios));

  mostrarComentarios();
  this.reset();
});

// mostrar al cargar
mostrarComentarios();
//Preguntas frecuentes//
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    // cerrar otros
    document.querySelectorAll(".faq-answer").forEach(a => {
      if (a !== answer) a.style.display = "none";
    });

    // toggle
    answer.style.display = 
      answer.style.display === "block" ? "none" : "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {

  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("acceptCookies");
  const rejectBtn = document.getElementById("rejectCookies");

  // 🔥 FORZAR VISIBILIDAD PARA PRUEBA
  banner.style.display = "flex";

  // Aceptar
  acceptBtn.onclick = function () {
    alert("click aceptar"); // prueba
    localStorage.setItem("cookiesDecision", "accepted");
    banner.style.display = "none";
  };

  // Rechazar
  rejectBtn.onclick = function () {
    alert("click rechazar"); // prueba
    localStorage.setItem("cookiesDecision", "rejected");
    banner.style.display = "none";
  };

});