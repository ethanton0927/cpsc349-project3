window.onload = function(){
    if(localStorage.getItem("playerWins") == null){
        localStorage.setItem("playerWins", 0);
    }else{
        document.getElementById("playerWinsScore").innerHTML = localStorage.getItem("playerWins");
    }

    if(localStorage.getItem("playerLosses") == null){
        localStorage.setItem("playerLosses", 0);
    }else{
        document.getElementById("playerLossesScore").innerHTML = localStorage.getItem("playerLosses");
    }
}

//handle rock btn
document.getElementById("rockBtn").addEventListener("click", function(){
    handleUserInput("rock");
});

//handle paper btn
document.getElementById("paperBtn").addEventListener("click", function(){
    handleUserInput("paper");
});

//handle scissors btn
document.getElementById("scissorsBtn").addEventListener("click", function(){
    handleUserInput("scissors");
});

function handleUserInput(userValue){
    //generate computer value
    var options = ["rock", "paper", "scissors"];
    var computerValue = Math.floor(Math.random() * 3);
    computerValue = options[computerValue]

    if(computerValue == userValue){
        //change no information since nobody has one
        console.log("It's a tie");
        return;
    }

    if(userValue == "scissors"){
        if(computerValue == "rock"){
            //change the localStorage to add loss to user
            console.log("Computer has won!");
            increaseLosses();
        }else{
            //change the localStorage to add win to user
            console.log("You have won!");
            increaseWins();
        }
    }else if(userValue == "rock"){
        if(computerValue == "paper"){
            //change the localStorage to add loss to user
            console.log("Computer has won!");
            increaseLosses();
        }else{
            //change the localStorage to add win to user
            console.log("You have won!");
            increaseWins();
        }
    }else if(userValue == "paper"){
        if(computerValue == "scissors"){
            //change the localStorage to add loss to user
            console.log("Computer has won!");
            increaseLosses();
        }else{
            //change the localStorage to add win to user
            console.log("You have won!");
            increaseWins();
        }
    }
}

function increaseWins(){
    localStorage.setItem("playerWins", parseInt(localStorage.getItem("playerWins")) + 1);

    //refresh the wins
    document.getElementById("playerWinsScore").innerHTML = localStorage.getItem("playerWins");
}

function increaseLosses(){
    localStorage.setItem("playerLosses", parseInt(localStorage.getItem("playerLosses")) + 1);

    //refresh the losses
    document.getElementById("playerLossesScore").innerHTML = localStorage.getItem("playerLosses");
}