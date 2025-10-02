document.addEventListener("keydown", (e) => {
  // 1. Corregido: Usa e.key para obtener la tecla presionada
  // 2. Comprueba si Ctrl (o Command en Mac) está presionado Y la tecla es 'u'
  if (e.ctrlKey && e.key === "u") { 
    alert("😁 No tienes permitido ver el codigo fuente");
    
    // Evita que el navegador abra el código fuente
    e.preventDefault(); 
  }
});

// Opcional: Bloquear clic derecho (Botón derecho)
document.addEventListener('contextmenu', (e) => {
    alert("🚫 Clic derecho deshabilitado.");
    e.preventDefault();
});
