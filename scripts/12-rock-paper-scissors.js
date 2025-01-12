let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement()

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const moves = ['Rock', 'Paper', 'Scissors'];
    return moves[Math.floor(Math.random() * moves.length)];
}

function playGame(playerChoice) {
    computerChoice = pickComputerMove();

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

let isAutoPlaying = false;
let intervalId;

function autoPlay() {

    if (!isAutoPlaying) {
        isAutoPlaying = true;
        document.querySelector('.js-auto-play-button').innerHTML = 'Stop Play';
        intervalId = setInterval(() => {
            const playerChoice = pickComputerMove()
            playGame(playerChoice);
        }, 1000)
    } else {
        document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play';
        clearInterval(intervalId);
        isAutoPlaying = false;
    }

}

document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('Rock');
    });

document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('Paper')
    });

document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('Scissors')
    });


document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('Rock');
    } else if (event.key === 'p') {
        playGame('Paper');
    } else if (event.key === 's') {
        playGame('Scissors');
    }
});
