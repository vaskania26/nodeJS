import { readFile } from "fs/promises";
import { argv } from "process";
import md5 from "md5";

(async () => {
  try {
    const arg = argv[2];
    const data = await readFile(arg, "utf8");
    console.log(md5(data));
  } catch (err) {
    console.error(err);
  }
})();
