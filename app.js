let playerImage = document.querySelector('.fstPlayer');
let machineImage = document.querySelector('.scdPlayer');
let machineScore = document.querySelector('#machineScore'); 
let playerScore = document.querySelector('#playerScore');
let timerDisplay = document.querySelector('.timer');
let interval;

let playerScoreCounter = 0;
let machineScoreCounter = 0;

const gameChoices = ["paper", "rock", "scissors"];

let changeUserChoice = (choiceId) =>{
    console.log(`${choiceId} - ${gameChoices[choiceId]}`);
    playerImage.src = `./${gameChoices[choiceId]}.png`;
    playerImage.id = choiceId;
    console.log(playerImage.src);
};

let updateScore = () => {
    let machineChoice = parseInt(machineImage.id);
    let playerChoice = parseInt(playerImage.id);
    console.log(`machineChoice: ${machineChoice} - playerChoice: ${playerChoice}`);

    if (playerChoice === machineChoice) {
        console.log("It's a tie");
    } else if ((playerChoice === 0 && machineChoice === 1) ||
        (playerChoice === 1 && machineChoice === 2) ||
        (playerChoice === 2 && machineChoice === 0)) {
        playerScoreCounter++;
        playerScore.textContent = playerScoreCounter;
        console.log("Player wins");
    } else {
        machineScoreCounter++;
        machineScore.textContent = machineScoreCounter;
        console.log("Machine wins");
    }
};

let startTimer = (duration) =>
{
    machineImage.src = '';
    clearInterval(interval);
    let timer = duration;
    interval = setInterval(() =>{
        timerDisplay.textContent = timer;
        if (--timer < 0) {
            timerDisplay.textContent = 'TIME Over!';
            clearInterval(interval);
            renderMachineImage();
            updateScore();
        }
    }, 1000);
}

let renderMachineImage = ()=>
{
    let randomChoiceIndex = Math.floor(Math.random() * 3);

    console.log(randomChoiceIndex);

    machineImage.src = `./${gameChoices[randomChoiceIndex]}.png`;
    machineImage.id = randomChoiceIndex;
}