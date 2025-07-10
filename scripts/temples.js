// Mostrar año actual
document.getElementById("year").textContent = new Date().getFullYear();

// Mostrar última modificación
document.getElementById("lastModified").textContent = document.lastModified;

// Funcionalidad del botón hamburguesa
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  const isVisible = navMenu.style.display === "flex";
  navMenu.style.display = isVisible ? "none" : "flex";
  menuBtn.textContent = isVisible ? "☰" : "✖";
});