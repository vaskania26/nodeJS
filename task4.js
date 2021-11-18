import { readFile } from "fs/promises";
import crypto from "crypto";

(async () => {
  try {
    const arg = process.argv[process.argv.length - 1];
    const data = await readFile(arg, "utf8");
    console.log(
      "encrypted MD5: " + crypto.createHash("md5").update(data).digest("hex")
    );
  } catch (err) {
    console.error(err);
  }
})();
