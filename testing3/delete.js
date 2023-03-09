var board = [];
var rows = 8;
var columns = 8;

var minesCount = 4;
var minesLocation = []; 

var tilesClicked = 0; 

var gameOver = false;

window.onload = function() {
    startGame();
}

function setMines() {
    for (let i = 0; i < 4; i++) {
        let mine = parseInt(Math.floor(Math.random()*8)+1) + '-' + parseInt(Math.floor(Math.random()*8)+1)
        if (minesLocation.includes(mine)) {
            i--;
            break;
        }
        minesLocation.push(mine);
        let bombSquare = document.getElementById(mine);
        bombSquare.innerHTML = `a`
        console.log(minesLocation);
    }

    // for (let i = 0; i < 4; i++) {
    //     console.log(minesLocation[i]);
        
    //     let bombSquare = document.getElementById(minesLocation[i].toString());
    //     console.log(bombSquare);
    //     bombSquare.innerText = "1";
    // }

    // minesLocation.push("1-1");
    // minesLocation.push("2-3");
    // minesLocation.push("5-6");
    // minesLocation.push("3-4");
}
setMines()
function
