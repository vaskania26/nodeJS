import fs from "fs";
import { argv } from "process";
import cliProgress from "cli-progress";

const readStream = fs.createReadStream(argv[2]);

const chunkSize = fs.createReadStream(argv[2]).readableHighWaterMark;

const { size } = fs.statSync(argv[2]);

const pb = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

let counter = 0;

pb.start(Math.round(size / chunkSize, 0));

readStream.on("data", (chunk) => {
  if (chunk) {
    pb.update(calculateChunk());
  }
});
readStream.on("close", () => {
  pb.stop();
});

const calculateChunk = () => {
  return ++counter;
};
