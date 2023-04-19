#!/usr/bin/env node

import { program } from "commander";
import inquirer from "inquirer";
import fs from "fs";
import { createAndSaveChain, getFileOptions, sampleChain } from "./model";

const create = () => {
  inquirer
    .prompt([
      {
        name: "order",
        message: "what order do you want the chain to be",
        type: "input",
      },
    ])
    .then(({ order }) => {
      const { fullFilePath, fileName } = createAndSaveChain(order);

      console.log(`Created a chain of order ${order} called ${fileName}`);
      console.log("full path", fullFilePath);
    });
};

const sample = () => {
  inquirer
    .prompt({
      name: "choice",
      message: "Which model do you want to sample",
      type: "list",
      choices: getFileOptions(),
    })
    .then(({ choice }) => {
      console.log(sampleChain(choice));
    });
};

const questionUser = () => {
  inquirer
    .prompt({
      name: "userAction",
      type: "list",
      message: "what are you trying to do?",
      choices: ["create a model", "sample a model"],
    })
    .then(({ userAction }) => {
      if (userAction === "create a model") {
        create();
      }

      if (userAction === "sample a model") {
        sample();
      }
    });
};

questionUser();
