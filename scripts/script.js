const computerScore = document.getElementById('computer-scr');

const userScore = document.getElementById('user-scr');

const gameStartContainer = document.getElementById('game-start');
const gameResultContainer = document.querySelector('.game-result');
const btnGameStart = document.getElementById('btn-game-start');
const hands = document.querySelector('.hands');
const computerChosen = document.getElementById('computer-choice');
const userChosen = document.getElementById('user-choice');
const result = document.getElementById('result');
const btnQuit = document.getElementById('btn-quit');
const quit = document.getElementById('quit');
const verdict = document.getElementById('verdict');

let cScore = 0;
let pScore = 0;


//functions
let click_num = 0;
//Game Start Function
const gameStart = function(){
    cScore=0;
    pScore=0;
    click_num =0;
    computerScore.innerText= cScore;
    userScore.innerText = pScore;
    hands.classList.remove('hidden');
    
    gameStartContainer.classList.add('hidden');
};

const newGameStart = () =>{
    verdict.classList.add('hidden');
    gameResultContainer.classList.add('hidden');
    hands.classList.add('hidden');
    gameStartContainer.classList.remove('hidden');
    quit.classList.add('hidden');
}

const gameLogic = function(userChoice, computerChoice){
    let res;

    if((userChoice === 'rock' && computerChoice=== 'scissor') || (userChoice==='paper' && computerChoice ==='rock') || (userChoice==='scissor' && computerChoice==='paper')){
        pScore++;
        res= 'won';
    }
    else if((computerChoice === 'rock' && userChoice=== 'scissor') || (computerChoice==='paper' && userChoice ==='rock') || (computerChoice==='scissor' && userChoice==='paper')){
        cScore++;
        res = 'lose';
    }
    else{
        res = 'draw';
    };
    updateDOM(userChoice, computerChoice, res);
    quit.classList.remove('hidden');
}

const updateDOM = (userChoice, computerChoice, res) => {
    computerScore.innerText = cScore;
    userScore.innerText = pScore;
    computerChosen.innerHTML = `You choose <strong>${userChoice.toUpperCase()}</strong>`;
    userChosen.innerHTML = `Computer choose <strong>${computerChoice.toUpperCase()}</strong>`;
    result.innerHTML = `YOU <strong>${res.toUpperCase()}</strong>`;

    if(cScore===10 || pScore===10){
        hands.classList.add('hidden');
        gameResultContainer.classList.add('hidden');
        verdict.classList.remove('hidden');
        if(cScore<pScore){
            verdict.innerHTML = `<strong>VICTORY🥳</strong>`;
        } else{
            verdict.innerHTML = `<strong>DEFEAT👾</strong>`;
        }
    }
    else{
        gameResultContainer.classList.remove('hidden');
    };
}

const check = function(input){
    const userChoice = input;
    const rps_arr = ['rock', 'paper', 'scissor'];

    const num = Math.trunc(Math.random()*3);
    const computerChoice = rps_arr[num];

    gameLogic(userChoice, computerChoice);
};


//Event listener
// don't give bracket after gameStart() 
// as it call the function even if not clicked
btnGameStart.addEventListener('click', gameStart);
btnQuit.addEventListener('click', newGameStart);
//calling the gameStart function






