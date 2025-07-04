// scripts/getdates.js
const yearSpan = document.getElementById('currentyear');
yearSpan.textContent = new Date().getFullYear();

const lastMod = document.getElementById('lastModified');
lastMod.textContent = `Last Modification: ${document.lastModified}`;
