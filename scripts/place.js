function calculateWindChill(temp, windSpeed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(1);
}

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  const lastModified = document.getElementById("lastModified");
  const windChillSpan = document.getElementById("windChill");

  const currentYear = new Date().getFullYear();
  year.textContent = currentYear;
  lastModified.textContent = document.lastModified;

  // Static values
  const temp = 14;
  const windSpeed = 6;

  if (temp <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temp, windSpeed);
    windChillSpan.textContent = `${chill} °C`;
  } else {
    windChillSpan.textContent = "N/A";
  }
});
