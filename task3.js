/* const crypto = require("crypto");

const prompt = require("prompt");

const hash = async () => {
  prompt.start();
  const str = await prompt.get(["input text"]);

  try {
    console.log(
      "encrypted MD5: " +
        crypto.createHash("md5").update(str["input text"]).digest("hex")
    );
  } catch (error) {
    console.error(error);
  }
};

hash();
 */

const str = process.argv[2];
const crypto = require("crypto");

const hash = () => {
  try {
    console.log(
      "encrypted MD5: " + crypto.createHash("md5").update(str).digest("hex")
    );
  } catch (error) {
    console.error(error);
  }
};

hash();
