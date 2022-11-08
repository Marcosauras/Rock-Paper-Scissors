// r + r = tie
// s + s =tie
// p + p =tie

// r + s = win
// s + p = win
// p + r = win

// r + p = lose
// s + p = lose
// p + s = lose

// step one dispay window

// step 2 let user choose

// step 3 let computer choose

// step 4 display win tie or loss

// step 5 show stats for win(s) tie(s) or loss(es)


let playerScore = 0;
let computerScore = 0;
let ties = 0


playGame();


function playGame(){
    
    let computersChoices = ["rock", "paper", "sissor"];
    let compChoice = computersChoices[Math.floor(Math.random()*computersChoices.length)];
    console.log(compChoice)

    alert("time to play Rock, Paper, and Sissors");

    let getUsersChoice = prompt("Rock, Paper or Sissor"); 
    let usersChoice = getUsersChoice.toLowerCase();

    if(usersChoice === "rock" || usersChoice === "paper" || usersChoice === "sissor"){
        usersChoice;
    } else{
        alert("please try again")
        playGame();
    }
    

    if (usersChoice === compChoice){
        ties = ties+1;
        alert("You choose: " + usersChoice + ". The computer choose: " + compChoice + ": It's a tie. stats: wins: " + playerScore + " loses: " + computerScore + " ties: " + ties)
    }
    else if (usersChoice === "rock" && compChoice === "sissor"){
        playerScore = playerScore+1;
        alert("You choose: " + usersChoice + ". The computer choose: " + compChoice + ": You win! stats: wins: " + playerScore + " loses: " + computerScore + " ties: " + ties)
    }
    else if (usersChoice === "sissor" && compChoice === "paper"){
        playerScore = playerScore+1;
        alert("You choose: " + usersChoice + ". The computer choose: " + compChoice + ": You win! stats: wins: " + playerScore + " loses: " + computerScore + " ties: " + ties)
    }
    else if (usersChoice === "paper" && compChoice === "rock"){
        playerScore = playerScore+1;
        alert("You choose: " + usersChoice + ". The computer choose: " + compChoice + ": You win! stats: wins: " + playerScore + " loses: " + computerScore + " ties: " + ties)
    }
    else {
        computerScore = computerScore+1;
        alert("You choose: " + usersChoice + ". The computer choose: " + compChoice + ": you lose! stats: wins: " + playerScore + " loses: " + computerScore + " ties: " + ties)
    }

    let decideToPlayAgain = prompt("Play again?");
    let playAgain = decideToPlayAgain.toLowerCase();
    if (playAgain === "yes"){
        playGame();
    }else{
        alert("Thanks for playing!         stats: wins: " + playerScore + " loses: " + computerScore + " ties: " + ties)
    }
    
    

    playGame();

}