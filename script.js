const board = document.getElementById('gameBoard');
document.getElementById('new-board').addEventListener('click', newBoard);
document.getElementById('shake').addEventListener('click', shake);
document.getElementById('draw-shade').addEventListener('click', toggleDrawShake);
const boardColor = "hsl(180, 60%, 60%)";
const headingsColor = "rgb(13,128,242)";
const hoverColor = "rgb(13,242,128)";
let shade = true;

function newBoard() {
    deleteBoard();
    let size = prompt("How many squares per side?", 40);
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
        cell.style.backgroundColor = boardColor;
        row.appendChild(cell);
    }
}

function darkenCell(event){
    let cell = event.target;
    let color = cell.style.backgroundColor;
    if (shade) {
        cell.style.backgroundColor = RGB_Linear_Shade(-0.25, color);
    } else {
        cell.style.backgroundColor = "hsl(180, 60%, 0%)";
    }
    

}

// Below function code is from 
// https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors  
function RGB_Linear_Shade(p,c) {
    var i=parseInt,r=Math.round,[a,b,c,d]=c.split(","),P=p<0,t=P?0:255*p,P=P?1+p:1-p;
    return"rgb"+(d?"a(":"(")+r(i(a[3]=="a"?a.slice(5):a.slice(4))*P+t)+","+r(i(b)*P+t)+","+r(i(c)*P+t)+(d?","+d:")");
}

function shake(){
    board.classList.add('shake');
    setTimeout(clearCells, 1200);
}

function clearCells(){
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = boardColor;
    }
    board.classList.remove('shake');
}

function toggleDrawShake(){
    let button = document.getElementById('draw-shade');
    if (shade) {
        button.innerHTML = 'Draw Mode';
    } else {
        button.innerHTML = 'Shade Mode';
    }
    shade = !shade;
}

