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

console.log(getComputerChoice());