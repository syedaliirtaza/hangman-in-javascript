let count = 0;
let livesRemaining = 10;

alert("Hello, User this is Hangman Game Build using JS, Please give the following answers so that we can start the game");
let playerOne = window.prompt ("Hello Player One, What is your name");

let playerTwo = window.prompt ("Hello Player Two, What is your name");

alert("player One will decide the name and player two will have to guess");
let catagoryType = window.prompt ("Enter the catagory in which the name falls in");
let realName = window.prompt ("Enter the one word name and player two will have o guess that name, Don't Cheat");
let hint = window.prompt("Enter a hint for player Two");


document.getElementById('catagory').innerText = catagoryType;
document.getElementById('lives').innerText = livesRemaining;

function display(val) {
    document.getElementById('guess').value += val;
}

function evaluating(){
    let x = document.getElementById('guess').value;
    if(x === realName){
        alert(`Congrats!! player ${playerTwo} wins`);
        window.location.reload();
    }
    else if(x != realName)
    {
        document.getElementById("guess").value = '';
        document.getElementById('lives').innerText = livesRemaining;
        let y = livesRemaining--;    
        checkLives(y);
    }
}
function checkLives(val){
    if(val === 0){
        alert(`Congrats!! Player ${playerOne} wins`);
        window.location.reload();
    }
}

function hinting(){
    alert(`your hint is ${hint}`);
}

