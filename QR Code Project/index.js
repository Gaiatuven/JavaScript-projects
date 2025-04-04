/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs"; // Import the fs module

qr.image("I love QR!", { type: "svg" }).pipe(fs.createWriteStream("i_love_qr.svg"));
qr.imageSync("I love QR!", { type: "svg" });

inquirer
  .prompt([
    {
      message: "What is your favorite food?",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      qr.image("I love QR!", { type: "svg" }).pipe(
        fs.createWriteStream("i_love_qr.svg")
      );
      qr.imageSync("I love QR!", { type: "svg" });
    }
  });