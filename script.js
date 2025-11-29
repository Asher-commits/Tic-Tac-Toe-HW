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

    // X win conditions

    if(cell1 === "X" && cell2 === "X" && cell3 === "X"){
        winner = "X"
    }else if(cell1 === "X" && cell4 === "X" && cell7 === "X"){
        winner = "X"
    }else if(cell4 === "X" && cell5 === "X" && cell6 === "X"){
        winner = "X"
     } else if(cell2 === "X" && cell5 === "X" && cell8 === "X"){
        winner = "X"
        } else if(cell7 === "X" && cell8 === "X" && cell9 === "X"){
        winner = "X"
        } else if(cell3 === "X" && cell6 === "X" && cell9 === "X"){
        winner = "X"
        } else if(cell1 === "X" && cell5 === "X" && cell9 === "X"){
        winner = "X"
        } else if(cell3 === "X" && cell5 === "X" && cell7 === "X"){
        winner = "X"

    // O win conditions

        }else if(cell1 === "O" && cell2 === "O" && cell3 === "O"){
        winner = "O"
        }else if(cell1 === "O" && cell4 === "O" && cell7 === "O"){
        winner = "O"
        }else if(cell4 === "O" && cell5 === "O" && cell6 === "O"){
        winner = "O"
        } else if(cell2 === "O" && cell5 === "O" && cell8 === "O"){
        winner = "O"
        } else if(cell7 === "O" && cell8 === "O" && cell9 === "O"){
        winner = "O"
        } else if(cell3 === "O" && cell6 === "O" && cell9 === "O"){
        winner = "O"
        } else if(cell1 === "O" && cell5 === "O" && cell9 === "O"){
        winner = "O"
        } else if(cell3 === "O" && cell5 === "O" && cell7 === "O"){
        winner = "O"
        }

        if(winner !== ""){
            statusText.textContent = `"Player ${currentPlayer} wins!"`
            gameActive = false;
            return;
        }

        // check draw
        if(cell1 !== "" && cell2 !== "" && cell3 !== "" &&
        cell4 !== "" && cell5 !== "" && cell6 !== "" &&
        cell7 !== "" && cell8 !== "" && cell9 !== ""){
            statusText.textContent = "It's a draw!"
            gameActive = false;
            return;
        }

        if(currentPlayer === "X"){
            currentPlayer = "O"
        }else{
            currentPlayer = "X"
        }

        updateStatusText()

} 


// Reset game

function resetGame(){
     cell1 = ""
     cell2 = ""
     cell3 = ""
     cell4 = ""
     cell5 = ""
     cell6 = ""
     cell7 = ""
     cell8 = ""
     cell9 = ""

    currentPlayer = "X"
    gameActive = true;

    cells.forEach(function(cell){
    cell.textContent = "";
    })

    statusText.textContent = `New game, let's go! Player X's turn`;


}

// Attach event listeners
cells.forEach(function(cell){
    cell.addEventListener("click", handleCellClick);
})


resetBtn.addEventListener("click", resetGame);

updateStatusText();