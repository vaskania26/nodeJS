const process = require("process");

console.log("Hello world");

let timer = 0;

setInterval(() => {
  timer += 1;
  if (timer === 10) {
    console.log("Goodbye world");
    process.exit();
  }
}, 1000);

const shutdown = () => {
  console.log(`Stopped by user after ${timer} seconds`);
  process.exit();
};

process.on("SIGINT", shutdown);

process.on("SIGTERM", shutdown);
