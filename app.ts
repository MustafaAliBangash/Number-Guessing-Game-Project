// Creating number guessing game
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 1000);
  });
};

async function welcome() {
  console.log(chalk.magentaBright("NUMBER GUESSING GAME"));
  let start = chalkanimation.glitch("LETS START!!");
  await sleep();
  start.stop();
}
await welcome();

let player1 = Math.round(Math.random() * 10);

async function player2() {
  let answers = await inquirer.prompt([
    {
      type: "number",
      name: "guessno",
      message: "please guess the number!",
    },
  ]);
  if (answers.guessno === player1) {
    console.log(
      chalk.greenBright(
        `Player1 guess ${player1} and you guess ${answers.guessno}, so you win the game!`
      )
    );
  } else {
    console.log(
      chalk.redBright(
        `Player1 guess ${player1} and you guess ${answers.guessno}, so you lose the game!`
      )
    );
  }
}
await player2();

async function tryAgain() {
  let restart = await inquirer.prompt([
    {
      type: "input",
      name: "restart",
      message: "Do you want to play again? y/n",
    },
  ]);
  if (restart.restart == "y") {
    for (const input of restart.restart) {
      await player2();
      tryAgain();
    }
  } else {
    console.log("Thank you for playing");
  }
}
tryAgain();
