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
    let choice = prompt("What is your choice ?");
    let generated = getComputerChoice();

    if (choice.toUpperCase == generated) {
        console.log("It's a TIE !");
    }
    else if (choice.toUpperCase == "ROCK") {
        rock(generated);
    }
    else if (choice.toUpperCase == "SCISSOR") {
        paper(generated);
    }
    else if (choice.toUpperCase == "PAPER") {
        scissor(generated);
    }
}

getHumanChoice();