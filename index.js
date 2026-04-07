document.getElementById("formLead").addEventListener("submit", function(e){
  const hp = document.getElementById("telefono2").value;
  if(hp !== ""){
    // Es un bot, no enviar
    e.preventDefault();
    console.log("Bot detectado 🚫");
    return;
  }
  // Si está vacío, el formulario se envía a HoneyPot
});