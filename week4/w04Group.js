let whoseTurn = 'x';

//put down an 'x' or an 'o'
function editBoard(divNumber) {
    document.getElementById(divNumber).innerHTML = whoseTurn;
    switchTurn();
}

//changes from an 'x' to 'o'
function switchTurn() {
    if (whoseTurn == 'x') {
        whoseTurn = 'o';
    } else {
        whoseTurn = 'x';
    }
}

//reset board
function resetBoard()
{   
    document.querySelectorAll('.box').forEach(function(a){
        a.innerHTML = "";
    })
}