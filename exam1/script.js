let machineNumber = Math.ceil(Math.random() * 21);
let score = 10;
let highscore = 0;

const updateScoreDisplay = () => {
    document.querySelector(".score").textContent = score;
    document.querySelector(".highscore").textContent = highscore;
}

document.querySelector(".check").addEventListener("click", () => {
    const userNumber = Number(document.querySelector(".guess").value);

    if (userNumber === machineNumber) {
        alert("Congratulations! You guessed the correct number.");
        if (score > highscore) {
            highscore = score;
            updateScoreDisplay();
        }
        machineNumber = Math.ceil(Math.random() * 21);
        score = 10;
        updateScoreDisplay();
    } else if (userNumber > machineNumber) {
        alert("Too high! Guess again!!");
        score--;
        updateScoreDisplay();
    } else if (userNumber < machineNumber) {
        alert("Too low! Guess again!!");
        score--;
        updateScoreDisplay();
    }

    if (score === 0) {
        alert("Game over! You ran out of attempts.");
        machineNumber = Math.ceil(Math.random() * 21);
        score = 10;
        updateScoreDisplay();
    }
});

document.querySelector(".restart").addEventListener("click", () => {
    machineNumber = Math.ceil(Math.random() * 21);
    score = 10;
    updateScoreDisplay();

});
document.querySelector('.restart').addEventListener("click", () => {
    score = 10;
    document.querySelector(".score").textContent = score;
})

