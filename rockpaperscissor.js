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
        console.log("You win! ROCK beats SCISSOR.");
    }
    else {
        console.log("You lose! PAPER beats ROCK.");
    }
}

function paper(computer) {
    if (computer == "ROCK") {
        console.log("You win! PAPER beats ROCK.");
    }
    else {
        console.log("You lose! SCISSOR beats PAPER.");
    }
}

function scissor(computer) {
    if (computer == "ROCK") {
        console.log("You lose! ROCK beats SCISSOR.");
    }
    else {
        console.log("You win! SCISSOR beats PAPER.");
    }
}

function getHumanChoice() {
    while (true) {
        let choice = prompt("Pick between rock, paper and scissor: ", "choice");
        if (choice == null) continue;
        
        const userInput = choice.toUpperCase();
        if (userInput === "ROCK" || userInput === "PAPER" || userInput === "SCISSOR") {
            return userInput;
        }
        else {
            console.log("Please pick a valid option w.r.t the game.");
        }
    }
}

function playRound(user, cp) {
    if (user == cp) {
        console.log("It's a TIE!");
        return;
    }

    if (user == "ROCK") {
        rock(cp);
    }
    else if (user == "PAPER") {
        paper(cp);
    }
    else {
        scissor(cp);
    }
}

let humanScore = 0, computerScore = 0;
const user = getHumanChoice();
const cp = getComputerChoice();
playRound(user, cp);