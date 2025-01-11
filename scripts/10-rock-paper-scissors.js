let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement()

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


function playGame(playerChoice) {
    const randomNumber = Math.random();
    let computerChoice;
    if (randomNumber <= 1/3) {
        computerChoice = 'Rock';
    } else if (randomNumber <= 2/3) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }

    let result;
    if (playerChoice === computerChoice) {
        result = "Tie.";
        score.ties++;
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        result = 'You win!';
        score.wins++;
    } else {
        result = 'You lose!';
        score.losses++;
    }
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML 
    = `You 
    <img src="images/${playerChoice.toLowerCase()}-emoji.png" class="move-icon">
    <img src="images/${computerChoice.toLowerCase()}-emoji.png" class="move-icon">
    Computer`;

    console.log(score);
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement()


}