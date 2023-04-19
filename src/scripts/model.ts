import fs from "fs";
import path from "path";
import { createChain, sampleModel } from "./markov-chain";

const ryan = "ryan";
const hpLoveCraft = "hpLoveCraft";

const fileToString = (filePath: string) => {
  return fs.readFileSync(path.resolve(`./src/scripts/raw-data/${filePath}`), {
    encoding: "utf-8",
  });
};

const getLoveCraftData = () => {
  const fileNames = fs.readdirSync(
    path.resolve("./src/scripts/raw-data/hp-lovecraft")
  );

  return fileNames
    .map((file) => fileToString("hp-lovecraft/" + file))
    .flatMap((value) => value.split(`\n`))
    .map((value) => value.trim())
    .filter(Boolean);
};

export const getFileOptions = () => {
  const folderPath = "./src/scripts/models/hp-lovecraft";

  return fs.readdirSync(path.resolve(folderPath));
};

export const createAndSaveChain = (order: number) => {
  const data = getLoveCraftData();
  const chain = createChain(data, order);

  const fileNames = getFileOptions();

  const prefix = fileNames.length.toString().padStart(3, "0");

  const fileName = prefix + "-order" + order + ".json";
  const fullFilePath = "./src/scripts/models/hp-lovecraft/" + fileName;

  fs.writeFileSync(path.resolve(fullFilePath), JSON.stringify(chain));

  return { fullFilePath, fileName };
};

export const sampleChain = (name: string) => {
  const model = JSON.parse(
    fs.readFileSync("./src/scripts/models/hp-lovecraft/" + name, "utf-8")
  );

  console.log(model);

  return sampleModel(model);
};

const main = () => {
  const data = getLoveCraftData();
  const order = 2;
  const chain = createChain(data, order);

  const fileNames = fs.readdirSync(
    path.resolve("./src/scripts/models/hp-lovecraft")
  );

  const prefix = fileNames.length.toString().padStart(3, "0");

  fs.writeFileSync(
    path.resolve(
      "./src/scripts/models/hp-lovecraft/" + prefix + "-order" + order + ".json"
    ),
    JSON.stringify(chain)
  );

  console.log(sampleModel(chain));
};

main();
