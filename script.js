const board = document.getElementById('gameBoard');
document.getElementById('new-board').addEventListener('click', newBoard);
document.getElementById('shake').addEventListener('click', shake);

function newBoard() {
    deleteBoard();
    let size = prompt("How many squares?", 50);
    size = size <100 ? size : 100;
    // create number of rows equal to user input 'size'
    for (let i = 0; i < size; i++){
        let row = document.createElement("div");
        row.classList.add('row');
        populateCells(row, size);
        board.appendChild(row);
    };
}

function deleteBoard(){
    while(board.firstChild){
        board.removeChild(board.firstChild);
    }
}

// create number of cells equal to user input 'size'
function populateCells (row, size){
    for(let i = 0; i<size; i++){
        let cell = document.createElement("div");
        cell.classList.add('cell');
        cell.addEventListener('mouseover', darkenCell);
        cell.addEventListener('touchstart', darkenCell);
        cell.addEventListener('touchmove', darkenCell);
        cell.addEventListener('touchend', darkenCell);
        row.appendChild(cell);
    }
}

function darkenCell(event){
    event.target.classList.add('darkened');
}

function shake(){
    board.classList.add('shake');
    setTimeout(clearCells, 1200);
}

function clearCells(){
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('darkened');
    }
    board.classList.remove('shake');
}

