// get every variable in :root
const rootStyles = document.querySelector(":root");

/**
 * Entry point of the application.
 */
function main() {
  updateClock();
  setInterval(() => updateClock(), 1000);
}

/**
 * Update the css variables of :root, so that our clock ticks.
 */
function updateClock() {
  const date = new Date();
  rootStyles.style.setProperty("--second", date.getSeconds());
  rootStyles.style.setProperty("--minute", date.getMinutes());
  rootStyles.style.setProperty("--hour", date.getHours());
}

main();
