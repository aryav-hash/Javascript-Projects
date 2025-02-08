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

function rock(computer) {
    if (computer == "SCISSOR") {
        console.log("You win! ROCK beats SCISSOR.");
        humanScore++;
    }
    else {
        console.log("You lose! PAPER beats ROCK.");
        computerScore++;
    }
}

function paper(computer) {
    if (computer == "ROCK") {
        console.log("You win! PAPER beats ROCK.");
        humanScore++;
    }
    else {
        console.log("You lose! SCISSOR beats PAPER.");
        computerScore++;
    }
}

function scissor(computer) {
    if (computer == "ROCK") {
        console.log("You lose! ROCK beats SCISSOR.");
        computerScore++;
    }
    else {
        console.log("You win! SCISSOR beats PAPER.");
        humanScore++;
    }
}

function playRound(user, cp) {
    if (user == cp) {
        console.log("It's a TIE!");
        return 0;
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
    return 1;
}

let humanScore = 0, computerScore = 0;

function playGame() {
    let game = 5;
    while (game > 0) {
        const user = getHumanChoice();
        const cp = getComputerChoice();
        let outcome = playRound(user, cp);
        
        if (outcome == 1) game--;
    }

    if (humanScore > computerScore) {
        console.log("Congratulations!! You win this game :)");
    }
    else {
        console.log("You have lost the game. Better luck next time.");
    }
}

playGame();