function getComputerChoice() {
    let g = Math.floor(Math.random() * 3);
    if (g == 1) {
        return "ROCK";
    }
    else if (g == 2) {
        return "PAPER";
    }
    else {
        return "SCISSOR";
    }
}

function rock(computer) {
    if (computer == "SCISSOR") {
        console.log("The player WINS !");
    }
    else {
        console.log("The player LOOSES !");
    }
}

function paper(computer) {
    if (computer == "ROCK") {
        console.log("The player WINS !");
    }
    else {
        console.log("The player LOOSES !");
    }
}

function scissor(computer) {
    if (computer == "ROCK") {
        console.log("The player LOOSES !");
    }
    else {
        console.log("The player WINS !");
    }
}

function getHumanChoice() {
    let choice = prompt("Pick between rock, paper and scissor: ", "void");
    const userInput = choice.toUpperCase();
    if (userInput !== "ROCK" || userInput !== "PAPER" || userInput !== "SCISSOR") {
        return "void";
    }
    else {
        return userInput;
    }
}

const user = getHumanChoice();
const cp = getComputerChoice();