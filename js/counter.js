const visitCounter = document.getElementById("counter");
const startNumber = 10000000;
let previousVisit =

  +localStorage.getItem("previous-visit") !== 0 &&
  +localStorage.getItem("previous-visit") !== null
    ? localStorage.getItem("previous-visit")
    : 1;
const numberToPrint = formatNumber(startNumber + +previousVisit);
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
visitCounter.textContent = `¡Bienvenidos/as a Guifos.com! ——————Donde los gifs están.////// Número de
visitas: ${numberToPrint}`;

localStorage.setItem("previous-visit", `${+previousVisit + 1}`);
