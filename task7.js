import readline from "readline";
import fs from "fs";
import { argv } from "process";

const readFromFile = fs.createReadStream(argv[2], "utf8");

let count = 0;

const output = () => {
  const rl = readline.createInterface({
    input: readFromFile,
  });
  rl.on("line", (input) => {
    const country = input.split(",");
    console.log(`${count}: ${country[0]}`);
    count++;
  });
};

output();
