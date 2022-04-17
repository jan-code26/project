//<![CDATA[ 
$(window).load(function(){
//this is a demo tic tac toe game
$(document).ready($('input.tictactoe').click(tictactoe));
$(document).ready($('#ff').click(reset));

var whoseMove = 'X';
var xMove = new Array();
var oMove = new Array();
var gameOver = false;
var winningConditions = new Array('aa/ab/ac','ba/bb/bc','ca/cb/cc',
                                  'aa/ba/ca','ab/bb/cb','ac/bc/cc',
                                  'aa/bb/cc','ac/bb/ca');
var whoWon = '';

function tictactoe() {
    document.getElementById("status").innerHTML = '';
    if(gameOver == false && this.value == '  '){
        if(whoseMove == 'X'){
            this.value = whoseMove;
            xMove[xMove.length] = this.id;
            whoseMove = 'O';
        }
        else {
            this.value = whoseMove;
            oMove[oMove.length] = this.id;
            whoseMove = 'X';
        }
    }


    if(xMove.length >2){
        whoWon = endGame();
    }

    if(gameOver && whoWon != '' && whoWon != 'draw') {
        document.getElementById("status").innerHTML = (whoWon + ' won!');
        
    }

    if(!gameOver && whoWon == 'draw') {
        document.getElementById("status").innerHTML = 'Games been draw!';
        
    }    
}

function endGame() {
    var winningCombinations = new Array();

    //set this variable value to true incase the game is over
    gameOver = true;    

    for(var index = 0; index < 8; index = index + 1){
        var xMatchCount = 0;
        var oMatchCount = 0;
        winningCombinations = winningConditions[index].split('/');
        for(var i = 0; i < 3; i = i + 1){
        console.log('winningCombinations ' + winningCombinations[i]);
        for(var j = 0; j < xMove.length; j = j + 1){
            console.log('xMove ' + xMove[j]);
            if(winningCombinations[i] == xMove[j]){
                xMatchCount = xMatchCount + 1;
                if(xMatchCount == 3){
                    return 'X';
                }
            }
        }
        for(var k = 0; k < oMove.length; k = k + 1){
            //console.log('oMove ' + oMove[k]);
            if(winningCombinations[i] == oMove[k]){
                oMatchCount = oMatchCount + 1;
                if(oMatchCount == 3){
                    return 'O';
                }
            }                
                }
        }
    }

    console.log('x Move Count ' + xMove.length);
    console.log('o Move Count ' + oMove.length);

    if(xMatchCount < 3 && oMatchCount < 3){
        gameOver = false;
    } 

    if(xMove.length + oMove.length == 9){
        return 'draw';
    }
}

function reset() {

    console.log('Xs Move - ' + xMove.join('/'));
    console.log('Os Move - ' + oMove.join('/'));

    console.log(winningConditions.length);

    whoseMove = 'X';
    xMove = new Array();
    oMove = new Array();
    gameOver = false;
    whoWon = '';

    $('input').filter(function() {
    if(this.id != 'ff') {
        this.value = '  ';
        }
    });
}
});//]]>  

