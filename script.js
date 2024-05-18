let currentPlayer = "X";
let arr = Array(9).fill(null);
let resetgame = document.querySelector("#reset-btn");
let resetgamebtn = document.querySelector("#restart-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

function checkWinner() {
    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {
        msg.innerText = `Winner is ${currentPlayer}`;
        msgContainer.classList.remove("hide");
        return;
    }

    if (!arr.some((e) => e === null)) {
        msg.innerText = "Match Draw!!.....Try again!";
        msgContainer.classList.remove("hide");
        return;
    }
}

function handleClick(el) {
    const id = Number(el.id);
    if (arr[id] !== null) return;
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Call this function to reset the game
function resetGame() {
    arr = Array(9).fill(null);
    currentPlayer = "X";
    msgContainer.classList.add("hide");
    // Clear the board or do any other necessary reset
}

// Add an event listener to the reset button
resetgamebtn.addEventListener("click", resetGame);
