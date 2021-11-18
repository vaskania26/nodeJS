import fs from "fs";
import { argv } from "process";

fs.readFile(`${argv[2]}`, "utf8", (err) => {
  if (err) {
    console.error(err);
  }
});
