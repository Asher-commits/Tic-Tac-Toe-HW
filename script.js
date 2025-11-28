// Get references to the elements we need from the HTML

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("statusText");
const resetBtn = document.getElementById("resetBtn");

// Variables to represent the game state

let currentPlayer = "X";
let gameActive = true;

let cell1 = ""
let cell2 = ""
let cell3 = ""
let cell4 = ""
let cell5 = ""
let cell6 = ""
let cell7 = ""
let cell8 = ""
let cell9 = ""

// Helper function

function updateStatusText(){
    if(gameActive){
        statusText.textContent = `Player ${currentPlayer}'s turn`;
    }
}
updateStatusText();

// Function to handle a cell click

function handleCellClick(event){
    const clickedCell = event.target;
    const cellNumber = clickedCell.getAttribute("data-cell");

    if(!gameActive){
        return;
    }

    if(cellNumber === "1" && cell1 !== ""){
        return;
    }else if(cellNumber === "2" && cell2 !== ""){
        return;
    }else if(cellNumber === "3" && cell3 !== ""){
        return;
    }else if(cellNumber === "4" && cell4 !== ""){
        return;
    }else if(cellNumber === "5" && cell5 !== ""){
        return;
    }else if(cellNumber === "6" && cell6 !== ""){
        return;
    }else if(cellNumber === "7" && cell7 !== ""){
        return;
    }else if(cellNumber === "8" && cell8 !== ""){
        return;
    }else if(cellNumber === "9" && cell9 !== ""){
        return;
    } 
    
    clickedCell.textContent = currentPlayer;

    if(cellNumber === "1"){
        cell1 = currentPlayer;
    }else if(cellNumber === "2"){
        cell2 = currentPlayer;
    }else if(cellNumber === "3"){
        cell3 = currentPlayer;
    }else if(cellNumber === "4"){
        cell4 = currentPlayer;;
    }else if(cellNumber === "5"){
        cell5 = currentPlayer
    }else if(cellNumber === "6"){
        cell6 = currentPlayer;;
    }else if(cellNumber === "7"){
        cell7 = currentPlayer
    }else if(cellNumber === "8"){
        cell8 = currentPlayer;
    }else if(cellNumber === "9"){
        cell9 = currentPlayer;
    }

    checkForWinnerOrDraw()
}


//  Function to check if someone won or if it is a draw

function checkForWinnerOrDraw(){
    let winner = "";

    if(winner !== ""){
        statusText.textContent = `Player ${currentPlayer} wins`;
        gameActive = false;

    }
}