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