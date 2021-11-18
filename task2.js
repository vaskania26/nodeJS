import util from "util";
import { exec } from "child_process";

const exe = util.promisify(exec);

const envs = [
  "docker --version",
  "git --version",
  "npm -v",
  "nvm version",
  "node -v",
];

async function getVersion(enviroment) {
  try {
    const { stdout } = await exe(enviroment);
    console.log(stdout);
  } catch (err) {
    console.error("stderr", err.stderr);
    process.exit(1);
  }
}

envs.forEach((el) => getVersion(el));
