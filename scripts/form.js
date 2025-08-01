const products = [
  { id: "p1", name: "Super Blender 3000" },
  { id: "p2", name: "Eco Kettle" },
  { id: "p3", name: "Quiet Fan" },
  { id: "p4", name: "Smart Toaster" },
  { id: "p5", name: "Air Purifier Pro" }
];

window.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("#product");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
  });
});
